import './Contact.scss';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
function Contact() {
    return (
        <div className='contact'>
            <p>BE IN THOUCH WITH US:</p>
            <div className="form">
                <input placeholder='Enter Your emai...' />
                <button>JOIN US</button>
            </div>
            <div className="contact-icons">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <GoogleIcon />
                <PinterestIcon />
            </div>
        </div>
    )
}
export default Contact;