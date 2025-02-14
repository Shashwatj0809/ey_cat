from pymongo import MongoClient
import random
from datetime import datetime, timedelta

def generate_risk_data():
    client = MongoClient('mongodb://localhost:27017/')
    db = client['organization_db']
    
    # Get all students
    students = list(db.students.find())
    
    risk_data = []
    for student in students:
        # Generate random risk factors
        attendance = random.uniform(60, 100)
        performance = random.uniform(50, 100)
        behavior = random.uniform(70, 100)
        
        risk_score = (attendance * 0.4) + (performance * 0.4) + (behavior * 0.2)
        
        risk_data.append({
            'student_id': student['_id'],
            'name': student['name'],
            'department': student['department'],
            'risk_score': risk_score,
            'factors': {
                'attendance': attendance,
                'performance': performance,
                'behavior': behavior
            },
            'generated_at': datetime.now()
        })
    
    # Save to database
    if risk_data:
        db.risk_data.insert_many(risk_data)
        print(f"Generated risk data for {len(risk_data)} students")
    else:
        print("No students found in database")

if __name__ == "__main__":
    generate_risk_data() 