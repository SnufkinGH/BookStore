import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import catalogRouter from './Back/Module/Catalog/CatalogCtrl.js';
import authorRouter from './Back/Module/Author/AuthorCtrl.js';
import publisherRouter from './Back/Module/Publisher/PublisherCtrl.js';
import authRouter from './Back/Module/Auth/AuthCtrl.js';

const PORT = '8080';

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/catalog', catalogRouter);
app.use('/author', authorRouter);
app.use('/publisher', publisherRouter);
app.use('/auth', authRouter);

async function faStartApp() {
    try{
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
    } catch(e) {
        console.log(e);
    }
}

faStartApp();
