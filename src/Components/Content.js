import React from 'react'
import ContentStyle from './content.module.css'

function Content() {
    return (
        <div id={ContentStyle.content_body}>
            <div id={ContentStyle.left}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br/><br/>
                    Quidem sint ex, hic in maxime quam saepe fuga at   
                    repellendus, 
                    <br/><br/>
                    illum possimus nam quas inventore totam numquam eos   
                    quae dolor et.
                </p>
                <a href="index.html" className={ContentStyle.content_button}>LOGIN</a>
                <a href="index.html" className={ContentStyle.content_button}>SIGN UP</a>
            </div>
            <div id={ContentStyle.right}>
                <img src="mainPage.png" alt="Home Page Line Art" id={ContentStyle.content_image}/>
            </div>
        </div>
    )
}

export default Content
