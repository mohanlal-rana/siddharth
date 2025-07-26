require("dotenv").config();
const express = require("express");
const CONNECT_DB = require("./utils/db");
const cors = require("cors");
const authRouter = require("./router/authRouter");
const adminRouter = require("./router/adminRouter");
const contactRouter = require("./router/contactRouter");
const noticeRouter = require("./router/noticeRouter");
const eventRouter = require("./router/eventRouter");
const errorMiddleware = require("./middlewares/errorMiddleware");
const path=require('path')

const app = express();

const corsOptions = {
  origin: "https://siddharth-frontend.netlify.app",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/admin", adminRouter);
app.use("/api/notice",noticeRouter)
app.use("/api/event",eventRouter)
app.use("/uploads/notices", express.static(path.join(process.cwd(), "uploads/notices")));
app.use("/uploads/events",express.static(path.join(process.cwd(),"uploads/events")))
// Serve static files
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all for React routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.use(errorMiddleware);
const PORT = 3000;

CONNECT_DB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
  });
});
