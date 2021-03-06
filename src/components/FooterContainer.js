import React, { useContext } from 'react'

import { Switch, Typography, Container, FormGroup, FormControlLabel, Divider, IconButton, AppBar } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'

import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'
import { ThemeContext } from '../contexts/ThemeContext'

const FooterContainer = () => {
  const { isLightTheme, themes, dispatch } = useContext(ThemeContext)

  const CustomSwitch = withStyles({
    switchBase: {
      color: isLightTheme ? themes.light.secondary : themes.dark.secondary,
      transition: 'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      '&$checked': {
        color: isLightTheme ? themes.light.secondary : themes.dark.secondary,
      },
      '&$checked + $track': {
        backgroundColor: isLightTheme ? themes.light.primary : themes.dark.secondary,
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const useStyles = makeStyles((theme) => ({
    copyright: {
      textAlign: 'right',
      display: 'block',
      color: isLightTheme ? themes.light.primary : themes.dark.primary,
      paddingTop: '4px',
    },
    name: {
      padding: '4px',
    },
    link: {
      paddingRight: '4px',
      color: isLightTheme ? themes.light.primary : themes.dark.primary,
    },
    footer: {
      backgroundColor: isLightTheme ? themes.light.background : themes.dark.background,
      opacity: 1,
      display: 'block',
      margin: '0px',
      padding: '0 0 24px 0',
      height: '64px',
      bottom: '0',
      top: 'auto',
      position: 'fixed',
    },
    footerContent: {
      display: 'flex',
    },
    divider: {
      backgroundColor: isLightTheme ? themes.light.secondary : themes.dark.primary,
    },
    switch: {
      color: isLightTheme ? themes.light.secondary : themes.dark.primary,
    },
    form: {
      justifyContent: 'center'
    }
  }))

  const styles = useStyles()

  const openGithubHandler = () => {
    window.open('https://github.com/danaelisanicolas/');
  }

  const openLinkedInHandler = () => {
    window.open('https://www.linkedin.com/in/danaelisanicolas/')
  }

  const toggleTheme = (e) => {
    dispatch(
      {type: 'CHANGE_THEME',
      lightTheme: !isLightTheme}
    )
  }

  return (
    <AppBar className={styles.footer} >
      <Divider className={styles.divider} />
      <Container className={styles.footerContent}>
        <FormGroup className={styles.form}>
          <FormControlLabel className={styles.switch} control={
            <CustomSwitch onChange={toggleTheme} checked={!isLightTheme} />
          } label={<Typography variant='body2'>Dark Theme</Typography>}>
          </FormControlLabel>
        </FormGroup>
        <Container id='copyright' className={styles.copyright}>
          <Typography className={styles.name} variant='body2'>DN © {new Date().getFullYear()}</Typography>
          <IconButton onClick={openGithubHandler} size='small' className={styles.link}>
            <RiGithubLine />
          </IconButton>
          <IconButton onClick={openLinkedInHandler} size='small' className={styles.link}>
            <RiLinkedinLine />
          </IconButton>
        </Container>
      </Container>
    </AppBar>
  );
}

export default FooterContainer;