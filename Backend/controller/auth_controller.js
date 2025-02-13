const userModel=require('../model/user_auth');


async function userRegistration(req,res){
    try {
        const { name, email, contact, password, address, role } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already registered' });
        }

        // Create a new user
        const newUser = new User({ name, email, contact, password, address, role });
        await newUser.save();

        res.status(201).json({ success: true, message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }


}
async function userlogin(req,res){
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email, password }); // No password hashing
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid email or password' });
        }

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                name: user.name,
                email: user.email,
                contact: user.contact,
                address: user.address,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }

}

module.exports={
    userRegistration,
    userlogin,
}