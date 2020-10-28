const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //insert data on table
    await saveOrphanage(db, {
        lat: "-28.9741659",
        lng: "-49.5275145",
        name: "Casa Lar Irmã Carmen",
        about: "Presta assistência a crianças de 0 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98888-7755",
        images: [
            "https://images.unsplash.com/photo-1570473546427-50ca517710b2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600712242868-18d4e92fb599?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"
    })
    
   //consult data on table
    const selectedData = await db.all("SELECT * FROM orphanages")
    console.log(selectedData)

   //consult just one orphanage by id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

  /*  //delete data
    console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
*/
    //id é unico, depois de excluir o 4 e o 5 ele nunca mais vai ser criado
})