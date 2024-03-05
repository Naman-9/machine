const PasswordStrengthGenerator = ({password = ""}) => {
    const getPasswordStrength = () => {
        const passwordLength = password.length;

       if (passwordLength < 4) {
            return "Very Weak"

        } else if (passwordLength < 8) {
            return "Poor"

        } else if (passwordLength < 12) {
            return "Medium"

        } else if (passwordLength < 16) {
            return "Strong"
        }
        else if (passwordLength > 16){
            return "Very Strong"
        }
        else {
            return ""
        }
    };

    const passwordStrength =  getPasswordStrength();
    if(!passwordStrength) return <></>

    return (
        <div className="password-strength">
            Strength: <span style={{fontWeight: "bold"}}>{passwordStrength}</span>
        </div>
    )
}

export default PasswordStrengthGenerator;