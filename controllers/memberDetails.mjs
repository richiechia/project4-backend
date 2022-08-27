class MemberDetailsController {
  constructor(db) {
    this.db = db;
  }

  test = async (request, response, next) => {
    try {

      response.status(200).json({
        test: true
      })
      
    } catch (error) {
      console.error(error)
    }
  }

  addMember = async (request, response, next) => {

    const { member } = request.body
    const { name, dob, age, email, gender} = member

    // Feeder
    const username = 'richiechi'

    const userFound = await this.db.userAccount.findOne({ where: {username: username}})

    // const useraccounts_memberdetails = await userFound.createUserAccount({
    //   name : name,
    //   dob: dob,
    //   age : age,
    //   email: email,
    //   gender: gender,
    // })
    try {
      response.status(200).json({
        message : "success",
        data : [member]
        
      })
      
    } catch (error) {
      console.error(error)
    }
  }


}

export default MemberDetailsController;
