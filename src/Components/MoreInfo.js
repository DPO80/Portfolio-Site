import React, { Component } from 'react';
import { Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';

export default class MoreInfo extends Component {
    render() {
        return (
            <div className="footer-row">
                <div>
            
               <Footer className="footer-page"  size="mega">
    <FooterSection className="footer-col" type="middle">
        <FooterDropDownSection title="Contact Me">
            <FooterLinkList>
                <a href to="/#">About me</a>
                <a href to="/#">Blog</a> 
                <a href to="/#">Press</a> 
                <a href to="/#">iOS App</a> 
                <a href to="/#">Android App</a>    
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <a href to="/#">React</a>   
            </FooterLinkList>
        </FooterDropDownSection>
        
        <FooterDropDownSection title="Follow Me">
            <FooterLinkList>
            <ul className="footer-social-icon">
            <a href style={{color: '#aa9627'}}to="/#"><i class="fa fa-linkedin"></i></a>
            <a href style={{color: '#aa9627'}}to="/#"><i class="fa fa-twitter"></i></a>
            <a href style={{color: '#aa9627'}}to="/#"><i class="fa fa-codepen"></i></a>
            <a href style={{color: '#aa9627'}}to="/#"><i class="fa fa-github"></i></a>
            </ul>
            </FooterLinkList>   
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <a href="/#">Questions</a>
                <a href="/#">Answers</a>
                
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection className="footer-text" type="bottom" >
        <FooterLinkList className="footer-bottom">
            <a href="/#">Privacy </a>
            <p>Copyright &copy; 2020 by dominicpatrick. All rights reserved. </p>
        </FooterLinkList>
    </FooterSection>
</Footer> 
            </div>
            </div>
        )
    }
}
