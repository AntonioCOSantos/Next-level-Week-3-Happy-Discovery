const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanages(db, )
    //consultar dados na tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

   //consultar somente 1 orphanato, pelo id
   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
   console.log(orphanage)

   //deletar dado da tabela
})