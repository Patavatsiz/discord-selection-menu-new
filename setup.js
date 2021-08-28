const { Client, MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

const client = new Client({
  intents: 32767,
  /*presence: { // botun durumu için / ** / kaldır 
        activities: [{
            name: "",
            type: "LISTENING",
        }],
        status: "dnd"   
    },*/
    restTimeOffset: 60,
});

client.settings = {
  prefix: "",
  token: "",

  etkinlik: "", // etkinlik ve çekiliş katılımcısı rolleri
  cekilis: "", // etkinlik ve çekiliş katılımcısı rolleri

  burcroles: ["", "", "", "", "", "", "", "", "", "", "", "",], // rolleri 139. satırdaki sırayla gir

  gameroles: ["", ""] // aynı şekilde burç gibi bunuda 155. satırdaki girdiğin sırayla gir bu arada 155. satırdaki girdiğin oyun isimleri gamesrow'daki .addOptions kısmındaki value ile aynı olması yani value: "valo" ise orayada "valo" diye gir
}

client.on("messageCreate", async (message) => {
  let args = message.content.trim().split(" ")
  if(args[0] !== client.settings.prefix + "setup") { return false } else {
      const actionsrow = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
        .setCustomId("event")
        .setPlaceholder("Etkinlik Rolleri")
        .addOptions([
          {
            label: "Çekiliş Katılımcısı", // başlık
            value: "cekilis",
            description: "Çekiliş katılımcısı rolünü almak için tıkla!", // açıklama label'ın altında gözükür
            emoji: "🎉" // emoji ayarlayabilirsiniz label'ın yanında gözükür
          },
          {
            label: "Etkinlik Katılımcısı",
            value: "etkinlik",
            description: "Etkinlik katılımcısı rolünü almak için tıkla!",
            emoji: "📢" // emoji ayarlayabilirsiniz
          }
        ])
      );
      const burcrow = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
        .setCustomId("burc")
        .setPlaceholder("Burç Rolleri")
        .setMaxValues(1)
        .addOptions([
          {
            label: "Koç",
            value: "Koç",
            description: "Koç burcu rolünü almak için tıkla!",
            emoji: "♈"
          },
          {
            label: "Boğa",
            value: "Boğa",
            description: "Boğa burcu rolünü seçmek için tıkla!",
            emoji: "♉"
          },
          {
            label: "İkizler",
            value: "İkizler",
            description: "İkizler burcu rolünü almak için tıkla!",
            emoji: "♊"
          },
          {
            label: "Yengeç",
            value: "Yengeç",
            description: "Yengeç burcu rolünü almak için tıkla!",
            emoji: "♋"
          },
          {
            label: "Aslan",
            value: "Aslan",
            description: "Aslan burcu rolünü almak için tıkla!",
            emoji: "♌"
          },
          {
            label: "Başak",
            value: "Başak",
            description: "Başak burcu rolünü almak için tıkla!",
            emoji: "♍"
          },
          {
            label: "Terazi",
            value: "Terazi",
            description: "Terazi burcu rolünü almak için tıkla!",
            emoji: "♎"
          },
          {
            label: "Akrep",
            value: "Akrep",
            description: "Akrep burcu rolünü almak için tıkla!",
            emoji: "♏"
          },
          {
            label: "Yay",
            value: "Yay",
            description: "Yay burcu rolünü almak için tıkla!",
            emoji: "♐"
          },
          {
            label: "Oğlak",
            value: "Oğlak",
            description: "Oğlak burcu rolünü almak için tıkla!",
            emoji: "♑"
          },
          {
            label: "Kova",
            value: "Kova",
            description: "Kova burcu rolünü almak için tıkla!",
            emoji: "♒"
          },
          {
            label: "Balık",
            value: "Balık",
            description: "Balık burcu rolünü almak için tıkla!",
            emoji: "♓"
          },
        ])
      )
              const gamesrow = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
        .setCustomId("game")
        .setPlaceholder("Oyun Rolleri")
        .addOptions([
          {
            label: "",
            value: "",
            description: "",
            emoji: "🎉"
          },
          {
            label: "",
            value: "",
            description: "",
            emoji: "📢"
          }
        ])
      );
      
      message.channel.send({ content: "Rol seçimi", components: [actionsrow, burcrow, gamesrow] })
  }
  

});

client.on("interactionCreate", async(interaction) => {
  let values = interaction.values[0]
  let burcs = [
    "Koç",
    "Boğa",
    "İkizler",
    "Yengeç",
    "Aslan",
    "Başak",
    "Terazi",
    "Akrep",
    "Yay",
    "Oğlak",
    "Kova",
    "Balık"
  ];
  let games = [
    "Mc",
    "GTA",
    "LOL",
    "Valo"
  ];
  let events = [
    "cekilis",
    "etkinlik"
  ];
  if(burcs.some((cmd) => values.includes(cmd))) {
    function remove() {
      interaction.member.roles.cache.forEach(role => {
        client.settings.burcroles.forEach(roles => {
          role.id === roles ? interaction.member.roles.remove(role.id) : false;
        })
      })
    }
    if(values === "Koç") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[0]) 
    remove()
    } else if (values === "Boğa") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[1]) 
    remove()
    } else if (values === "İkizler") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[2]) 
    remove()
    } else if (values === "Yengeç") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[3]) 
    remove()
    } else if (values === "Aslan") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[4]) 
    remove()
    } else if (values === "Başak") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true }) // mesajı değiştirebiirsiniz / ephemeral = true ? Yalnızca kişiye görünen mesaj : Herkese görünen mesaj (Tavsiye edilmez)
    interaction.member.roles.add(client.settings.burcroles[5]) 
    remove()
    } else if (values === "Terazi") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[6]) 
    remove()
    } else if (values === "Akrap") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[7]) 
    remove()
    } else if (values === "Yay") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[8]) 
    remove()
    } else if (values === "Oğlak") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[9]) 
    remove()
    } else if (values === "Kova") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[10]) 
    remove()
    } else if (values === "Balık") {
    interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
    interaction.member.roles.add(client.settings.burcroles[11]) 
    remove()
    }
  } else if (games.some((cmd) => values.includes(cmd))) {

  } else if (events.some((cmd) => values.includes(cmd))) {
    if(values === "cekilis") {
  interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
  interaction.member.roles.add(client.settings.cekilis)
    } else if(value === "etkinlik") {
  interaction.reply({ content: `Rol başarıyla hesabına tanımlandı.`, ephemeral: true })
  interaction.member.roles.add(client.settings.etkinlik)
    }
  
  }
})


client.login(client.settings.token).then(() => console.log("Bot Aktif")).catch(() => console.log("Hata!"))
