const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,       // Recommandé pour éviter les avertissements
      useUnifiedTopology: true,    // Active le nouveau moteur de découverte et de surveillance
      useFindAndModify: false,     // Évite les avertissements liés à findOneAndUpdate
    })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
