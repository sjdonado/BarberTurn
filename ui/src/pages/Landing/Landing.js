import React, { Component } from 'react';
import styled from 'styled-components';
import './Landing.scss';
import smartphoneI from './assets/images/smartphone.png';
import googleBtnI from './assets/images/google_btn.png'
import searchI from './assets/images/search.png'
import gMobileUserI from './assets/images/google-mobile-user.png'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-scroll";
import Button from '@material-ui/core/Button';
import { Link as LinkR } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

const Wrapper = styled.div `
  flex-direction: column;
  display: flex;
`;

const Bar = styled.div `
  flex-direction: row;
  display: flex;
  place-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  padding: 20px;
  width: 100%;
`;

const Description = styled.div `
  flex-direction: row;
  padding: 40px;
  display: flex;
`;

const Features = styled.div `
  flex-direction: column;
  padding: 120px 80px 120px 80px;
  display: flex;
  background: linear-gradient(90deg, #111111, #333333);
  align-items: center;
`;

const Steps = styled.div `
  flex-direction: column;
  padding: 120px 80px 120px 80px;
  display: flex;
  align-items: center;
  position: relative;
`;

const SideBar = styled.div `
  width: 250,
`

const styles = { };

class Landing extends Component {
  state = {
    left: false,
  };

  toggleDrawer = () => {
    this.setState(state => ({ left: !state.left}));
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const currentHideNav = (window.innerWidth <= 900);
    if (currentHideNav !== this.state.hideNav) {
      this.setState({hideNav: currentHideNav});
    }
  }

  render() {
    console.log(this.state.hideNav);
    
    const bar = !this.state.hideNav ?
      <Bar className="bar">
        <Link to="description"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        >¿Qué somos?</Link>
        <Link to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >Beneficios</Link>
        <Link to="steps"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        >¿Cómo comenzar?</Link>
        <LinkR to="/login">
          <Button variant="outlined">Ir al portal</Button>
        </LinkR>
      </Bar> : 
      <Bar className="bar">
        <LinkR to="/login">
          <Button variant="outlined">Ir al portal</Button>
        </LinkR>
      </Bar>
  
    return (
      // <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
      <Wrapper>
        {bar}
        <div className="hero-image">
            <div className="hero-content">
              <h1> BarberTurn </h1>
            </div>
            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        <Description className="desc" name="description">
            {!this.state.hideNav && <img src={smartphoneI} alt="Smartphone"></img>}
            <div className="content">
              <h2>¿Qué somos?</h2>
              <p>Somos una app que busca optimizar los turnos de espera en las barberías, facilitando dicho proceso por parte del cliente.</p>
              <p> Con <b>BarberTurn</b>, los usuarios podrán buscar su barbería favorita y solicitar su turno desde internet, por lo que se 
              evitarán el engorroso evento de tener que dirigirse físicamente al establecimiento y verse obligados a esperar largos tiempos para ser atendido. </p>              
            </div>
          </Description>
        <Features className="features" name="features">
            <h2>Beneficios</h2>
            <div className="icons">
              <div>
                <SearchIcon/>
                <span>Busca la barbería que más te guste de forma rápida gracias a nuestros filtros</span>
              </div>
              <div>
                <AssignmentTurnedInIcon />
                <span> Pide tu turno desde la comodidad de manera virtual </span>
              </div>
              <div>
                <MonetizationOnIcon />
                <span>Aprovecha las promociones que tenemos para ti</span>
              </div>
            </div>
          </Features>
        <Steps className="steps" name="steps">
            <h2>¿Cómo comenzar?</h2>
            <div className="cards">
              <Card className="special-card">
                <CardContent>
                  <div className="content">
                    <img src={googleBtnI} style={{height: '40px'}} alt="Google Button"></img>
                    <div className="or">
                      <div></div>
                      <span>o</span>
                      <div></div>
                    </div>
                    <Typography align="center" style={{color: '#616161'}}>
                      Registrate con tu correo electrónico
                    </Typography>
                  </div>
                </CardContent>
              </Card>
              <Card className="special-card">
                <CardContent>
                  <div className="content">
                    <img src={searchI} style={{height: '120px', marginBottom: '20px'}} alt="Search icon"></img>
                    <Typography align="center" style={{color: '#616161'}}>
                      Ubica tu barbería preferida a través de nuestro portal
                    </Typography>
                  </div>
                </CardContent>
              </Card>
              <Card className="special-card">
                <CardContent>
                  <div className="content">
                    <img src={gMobileUserI} style={{height: '120px', marginBottom: '20px'}} alt="Google Mobile User"></img>
                    <Typography align="center" style={{color: '#616161'}}>
                      Pide un turno y comienza a disfrutar
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
            <span className="credits">
              made with <FavoriteIcon style={{color: 'darkred'}} /> by
              <b><a href="https://www.instagram.com/p/BtyihSvAk3RlWXQq-HKlIyC17D53pKxw55S5Kc0/" target="_blank" rel="noopener noreferrer"> Globetrotters</a></b>
            </span>
          </Steps>
      </Wrapper>
      //   {sideList}
      // </Drawer>
    )
  }
}

export default withStyles(styles)(Landing);