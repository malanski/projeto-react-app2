import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';




export const Contato = (props) => {
    return (
        <div>
            <h1>Contatos</h1>
            <main>
                <div className="main-ul">
                    <a href="https://www.linkedin.com/in/ulisses-malanski/"><LinkedInIcon /> Linkedin Profile</a><br/>
                    <a href="https://www.facebook.com/ulisses.malanski"><Facebook /> Facebook Profile</a><br/>

                    <a href="https://www.github.com/malanski"><GitHubIcon /> GitHub Repository's</a><br/>
                    <a href='https://www.instagram.com/ulissesmalanski_tattoo/'><Instagram />Instagram Art and Tattoo's</a>
                    

                </div>
            </main>
        </div>

    )
}