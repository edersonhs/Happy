const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.8123658",
        lng: "-50.3383711",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "999999999",
        images: [
            "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontate e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até as 8h",
        open_on_weekends: "0"
    })

    // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente um orphanato, pelo ID
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id ='4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id ='5'"))
})