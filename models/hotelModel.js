module.exports=(sequelize,DataTypes)=>{
    const Hotel= sequelize.define("hotel",{

        hotelId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING
        },
        phoneNumber:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        },
        province:{
            type: DataTypes.STRING
        },
        district:{
            type: DataTypes.STRING
        },
        town:{
            type: DataTypes.STRING
        },
        Street1:{
            type: DataTypes.STRING
        },
        Street2:{
            type: DataTypes.STRING
        },
    })
    return Hotel
}