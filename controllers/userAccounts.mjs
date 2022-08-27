import { Op, Sequelize } from 'sequelize';

class UserAccountsController {
  constructor(db) {
    this.db = db;
  }
  
  test = async (request, response, next) => {
    try {

      const username = 'Urban.Howell'
      const email = 'Brandt.Walsh@hotmail.com'


      const data = await this.findByUserOrEmail({username, email})
      console.log(data)
      // response.send('testing connection')
      response.status(200).json({
        test:true
      })
    } catch (error) {
      console.error(error)
    }
  };

  createUser = async (request, response, next) => {

    const { registerMap } = request.body
    const { username, email, password, cookie } = registerMap

    let userStatus = 0;
    let emailStatus = 0;
    let message = "";

    try {
      const dataUserOrEmail = await this.findByUserOrEmail({username, email})
      console.log(dataUserOrEmail)
      if (dataUserOrEmail.length === 0){
        const createAccount = await this.db.userAccount.create({
          username: username,
          email : email,
          password: password,
          cookie: cookie,
        })
        message = "Account successfully created"
      } else {
        dataUserOrEmail.map((data) => {
          if (username === data.username){
            userStatus = 1
            message += "Username is taken. "
          }
          if (email === data.email){
            emailStatus = 1
            message += "Email is taken. "
          }
        })

      }
      response.status(200).json({
        message: message,
        data: [
          {userStatus : userStatus},
          {emailStatus: emailStatus}
        ]
      })
    } catch (error) {
      console.error(error)
    }
  }
  
  // Return null response if cannot find, else return 
  findByUserOrEmail = async ({username, email}) => {
    try {
      const UserOrEmail = await this.db.userAccount.findAll({
        where: {
          [Op.or]:[
            {username: username},
            {email : email}
          ]
        }
      })
      if (UserOrEmail === null){
        return UserOrEmail
      } else {
        const dataArray = []
        UserOrEmail.map((data) => {
          const dataJSON = data.toJSON()
          dataArray.push(dataJSON)
        })
        return dataArray
      }
    } catch (error){
      console.error(error)
    }
  }


}



export default UserAccountsController;
