import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { CTX } from './Store';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
  },
  chatBox: {
    width: '85%'
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  // Ctx Store
  const { allChats, sendChatAction, user } = React.useContext(CTX);

  const topics = Object.keys(allChats);

  // Local state
  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [textValue, changeTextValue] = React.useState('');

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Community
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {topics.map(topic => (
                <ListItem
                  onClick={ev => changeActiveTopic(ev.target.innerText)}
                  key={topic}
                  button
                >
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {allChats[activeTopic].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} className={classes.chip} />
                <Typography variant="h6" component="h6">
                  &nbsp;:&nbsp;{chat.msg}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.chatBox}>
            <TextField
              className={classes.chatBox}
              label="Send a Message"
              value={textValue}
              onChange={e => changeTextValue(e.target.value)}
            />
          </div>
          <div className={classes.button}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                sendChatAction({
                  from: user,
                  msg: textValue,
                  topic: activeTopic
                });
                changeTextValue('');
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
