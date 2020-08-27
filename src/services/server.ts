import '../config/env';
import 'reflect-metadata';
import database from '../database';
import app from './App';

database
  .then(() => {
    console.log(`Connection DataBase Success`);
    app.emit('ServerOn');
  })
  .catch((err) => console.log(err));

app.on('ServerOn', () => {
  app.listen(process.env.PORT, () => {
    if (process.env.MODE == 'development') {
      console.log(`http://localhost:${process.env.PORT}`);
    }
  });
});
