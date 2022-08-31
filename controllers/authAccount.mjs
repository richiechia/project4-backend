
class AuthController {
  constructor(db) {
    this.db = db;
  }

  signIn = async (request, response, next) => {
    try {

      const { loginMap } = request.body
      const { username, password} = loginMap

      if (username !== 'richiechia123'){
        throw "Lol"
      }

      response.cookie('user', username);
      response.cookie('isLoggedIn', true);
      response.status(200).json({
        success: true,
        data: { msg: "nice"}
      })

    } catch (error) {
      console.error(error)
    }
  }

  reAuth = async(request, response, next) => {
   try {
      console.log('re-auth ran');
      const { user } = request;
      // can run a db query to check if it is a real user
      const userFound = await this.db.userAccount.findOne({ where: {username: user}})
      
      if (userFound !== null) response.cookie('isLoggedIn', true);
      response.status(200).json({
        success: true,
        data: { msg: 'Nice' },
      });
    } catch (err) {
      next(err);
    }
  }

  verifySignIn = async (req, res, next) => {
    try {
      res.status(200).json('You are logged in !');
    } catch (err) {
      next(err);
    }
  };


  logout = async( req, res, next) => {
    try {
      res.clearCookie('isLoggedIn');
      res.status(200).json({
        success: true,
        message: 'Logout',
      });
    } catch (err) {
      next(err);
    }
  };


}

export default AuthController