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

  getCurrentUser = async (request, response, next) => {
    
    try {
      response.status(200).json({
        message: "success",
        data : ["lol"],
        cookies : [request.cookies.user]
      }) 
      } catch (error) {
        console.error(error)
    }
  }

  addMember = async (request, response, next) => {

    const { member } = request.body
    const { name, dob, age, email, gender} = member

    // Feeder
    const username = request.cookies.user

    try {
      
      const userFound = await this.db.userAccount.findOne({ where: {username: username}})

      userFound.addMemberdetail({
        name : name,
        dob: dob,
        age: age,
        email: email,
        gender: gender,
        
      })
      const memberCreate = await this.db.memberDetail.create({
      name: name,
      })


      const result = await this.db.userAccountMemberDetail.create({
        useraccount_id : userFound.id,
        memberdetail_id: memberCreate.id,
      })

      // console.log(result)

      response.status(200).json({
        message : "success",
        data : [request.cookies]
        
      })
      
    } catch (error) {
      console.error(error)
    }
  }


}

export default MemberDetailsController;
