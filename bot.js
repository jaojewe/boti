const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('guildCreate', guild => {
  client.channels.get("475316371207749642").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("475316371207749642").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});

client.on('message', message => {
    if(message.channel.type === "dm") return;
      if(message.content.startsWith ("+marry")) {
      if(!message.channel.guild) return message.reply(' This command only for servers ')
      var proposed = message.mentions.members.first()

      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 10 ثانية 
 اكتب موافقة او لا**`)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول قلللوش مبروك**`))

   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})




  }
});





client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!Mhstr')){
 if (message.author.id !== '389090790984515594') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



         client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`hamodii_yt`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
    var prefix = "+"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);
  
  
  
  
  
  
  client.on("message", message => {
    var prefix = "+"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
    message.channel.send(image)
        }
    });
	
	
	
	
	
	
	client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='+count')
      var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
    });
	
	
	
	


  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});




client.on('message', message => {
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc2') {
  if (!args[1]) {
message.channel.send("**^bc <message>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' The server', `${message.guild.name}`, true)
          .addField(' who sended the messege ', `${message.author.username}!${message.author.discriminator}`, true)
          .addField(' the messege ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const unknown = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| the messege is loading ')
      .addBlankField(true)
      .addField('♨| i got sended to  ', message.guild.memberCount , true)
      .addField('📝| the message ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});





client.on('guildMemberAdd', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('475353580958777345').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
    client.channels.get('475353595563474954').setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
});

client.on('guildMemberRemove', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('475353580958777345').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
    client.channels.get('475353595563474954').setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
});


client.on('message', message => {
    if (message.content.startsWith("+invite")) {

    message.guild.fetchInvites()
    .then(invites => message.channel.send(`**:busts_in_silhouette:  اتيت ب     [${invites.find(invite => invite.inviter.id === message.author.id)}]    :calling:   عضو لهذا السيرفر    `))
         
    }
});

const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('+صراحه')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});




client.on('message',message =>{
    var prefix = "+";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://i.imgur.com/OM00xyh.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });
  
  
 client.on('message', message => {
        var prefix = "+";
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
           
        if(message.mentions.users.size === 0) {
          return message.reply("Please mention a user to mute.");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("Try again.");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("User muted successfully.");
        }
      }
    }); 
	
	client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'unmutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });

  
  
  client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '!!';

if(cmd === `${prefix}suggest`) {
    var suggestMessage = message.content.substring(8)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("New suggest just added!!")
    .setDescription(`**${suggestMessage}**`)
    .setFooter(`Suggested By : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggests");
    if (!suggests) return message.channel.send("You should make A **suggests** channel!")
    suggests.send(suggestEMBED);
}

});




client.on('message', emoko => {
  if (emoko.content === "+date") {
         if (!emoko.channel.guild) return emoko.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }


            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

const embed = new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(emoko.author.username, emoko.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")


  emoko.channel.sendEmbed(embed);
   }
});


client.on('message', message => {
  if (message.content.startsWith(prefix + "deafen")) {
    if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
  { message.member.setDeaf(true);
    }
  }
    });
client.on('message', message => {
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
  { message.member.setMute(true);
    }
  }
    });
client.on('message', message => {
  if (message.content.startsWith(prefix + "undeafen")) {
    if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
  { message.member.setDeaf(false);
    }
  }
    });
client.on('message', message => {
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.member.hasPermission('MUTE_MEMBERS')) return;
  { message.member.setMute(false);
    }
  }
    });
	
	client.on('message', msg => { 
    if (msg.content.startsWith(`+warn`)) {
      if(!msg.member.hasPermission("MANAGE_MESSAGES")) return;
       let args = msg.content.split(" ").slice(1);
      if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
      if (!args[0]) return msg.reply('اكتب السبب')
      //غير اسم الروم او سوي روم بذا الاسم 
      if (msg.guild.channels.find('name', 'warns')) {
        //اذا غيرت فوق غير هنا كمان 
        msg.guild.channels.find('name', 'warns').send(`
      تم اعطائك انذار : ${msg.mentions.members.first()}
      لأنك قمت بما يلي
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      }
    }
})


client.on('message', async najzx => {
    if(najzx.content.startsWith("+tv")) {
      if(!najzx.member.hasPermission('MANAGE_CHANNELS')) return;
      await najzx.channel.send("ارسل اسم الروم").then(e => {
      let filter = m => m.author.id === najzx.author.id
      let name = '';
      let time = '';
      let type = '';
      let limit = '';
   najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
      .then(collected => {
        name = collected.first().content
        collected.first().delete()
  e.edit("ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(co => {
  if(isNaN(co.first().content)) return najzx.reply("الوقت بالدقائق ! ارقام فقطٍ");
  if(co.first().content > 180 || co.first().content < 2) return najzx.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
    time = co.first().content
  co.first().delete()
    e.edit("ارسل نوع الروم text, voice")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(col => {
    type = col.first().content
  col.first().delete()
  e.edit("ارسل عدد الاعضاء الذين يستطيعون الدخول")
  najzx.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
  .then(coll => {
    if(isNaN(coll.first().content)) return najzx.reply("عدد الاعضاء يكون بالارقام فقط");
      limit = coll.first().content
  coll.first().delete()
  
    e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
    najzx.guild.createChannel(name, type).then(c => {
      c.edit({
        userLimit: limit
      })
      setTimeout(() => {
        c.delete()
        najzx.channel.send("تم انقضاء الوقت")
      }, Math.floor(time*60000))
      
    })
    e.edit("تم انشاء الغرفه استمتع")
  
  })
  })
  })
  })
  })
  
    }
  })
  
 

client.on('message', message => {
      if (message.author.bot) return;
      var prefix ="$$"
       if (message.content === prefix + "help-admin") {
        if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
       message.channel.send('**تم ارسال رسالة في الخاص**');
  
  
  
  
   message.author.sendMessage(`
   **
  [❖═════اومر ادمن═══════❖]
  ❖ +kick <mention > ➾  kickلي اعطاء شخص

  ❖ +setvoice  لي انشاء روم فويس اونلاين
  
  ❖ +say  ➾ يكرر الكلام الذي تقولة
  
  ❖ +ban <mention> ➾ لي اعطاء شخص بان
  
  ❖ +unban <mention> ➾ لي فك بان عن شخص
  
  ❖ +clear ➾ لي مسح الشات
  
  ❖ +mute <mention> ➾ لي اعطاء ميوت لي شخص
  
  ❖ +ct <name> ➾ لي انشاء روم كتبي
 
  ❖ +cv <name> ➾لي انشاء روم صوتي
  
  ❖ +bc <message>  ➾ لي ارسال رسالة لي كل الاعضاء
  **
  `);
  
      }
  });
  
  
  

  client.on("message", (message) => {
           if (message.channel.type === "+dm") {
      if (message.author.id === client.user.id) return;
     let jackeo = new Discord.RichEmbed()
            .setTimestamp()
                .setTitle("هذة ارسل للبوت رسالة")
                .addField(`من:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                   .setThumbnail(message.author.displayAvatarURL)
                   .addField(`الرسالة: `, `\n\n\`\`\`${message.content}\`\`\``)
                  .setFooter(`DM ALPHA | Jackeo`)
               client.users.get("428890200735875073 ").send(jackeo)
         }
});


 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("+كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});





 
 
 
 client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
Bot BY hamodii_yt#8531
             DreamCraft       BOT
╔[❖════════════❖]╗
             Prefix = ' + '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝
 
 ❖ +mutevoice < mention > ➾ mutevoice member

 ❖ +unmutevoice <mention> ➾ unmutevoice member

 ❖ +tv ➾ create channel With Your Type
  
 ❖ +bc <message> ➾ message all members in server


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝ 

❖ +date ➾ see date (متقدم ساعتين)

❖ +inv ➾ server invite

❖ +ping ➾ to see ping 

❖ +bot ➾ bot informations 

❖ +invite ➾ bot invite link

❖ +اذكار ➾ azkar

❖  +slots ➾ Slots

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

==================================================================

By hamodii_yt#8531

==================================================================

bot invite link: https://discordapp.com/oauth2/authorize?client_id=475285011646644224&permissions=8&scope=bot

==================================================================

`);

    }
});



client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 
 
 
 const adkar = [
	'**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
	'**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
	'**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
	'**‏اذكار  |  **أستغفر الله .',
	'**‏اذكار  | **الْلَّهُ أَكْبَرُ',
	'**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
	'**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
	'**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
	'**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
	'**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
	'**‏اذكا��  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
	'‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
	'**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
	'**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
	'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
	'**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
	'**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
	'**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
	'**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
	'**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
	'**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
	'**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
	'**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
	'**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
	'**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
	'**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
	'**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
	'**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
	'**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
	'**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
	'**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith('+اذكار')) {
	if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("**اذكار**")
  .setThumbnail(message.author.avatarURL)
	.setFooter(`DreamCraft`, '')
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
				 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("+")
  }
  });
  

 
client.on('message', message => {
    if (message.content.startsWith("+hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 }); 
 
 
 
 client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**Massge**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});


client.on('message', message => {
  if(message.content === '+support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discord.gg/ySnVHNd ')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});


client.on("message", message => {
        let args = message.content.split("+").slice(1);
      if (message.content.startsWith(prefix + 'report')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join('+');
            let modlog = client.channels.find('name', 'report');
            if (!reason) return message.reply('**ضع سبباً مقنعاً**');
              if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
       
        if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('نوع الرسالة:', 'Report')
          .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
          .addField('السبب', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          console.log('[report] Send By: ' + message.author.username)
      }
      });
	  
	  


client.on('message',message =>{
    var prefix = "+";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"+"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });
  
  
  
  client.on('message', message => {
   if (message.content === "+id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("الاسم:",`${message.author.username}`, true)
  .addField('التاق:',"#" +  message.author.discriminator, true)
  .addField("الايدي:", message.author.id, true)
  .addField("تم الانشاء في:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply(":information_source:  #kick ``@NAWAF`` يجب تحديد شخص ");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طرده**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} kicked from the server ! :airplane: **  `)

}
});


client.on('message', message => {
    if(message.channel.type === 'dm') {
        var guildID = 'Guild ID'; // <=============== 463277981146808331
        if(message.content.includes('discord.gg/')) {
            var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
            member.ban({ reason: 'ADS In Private.' }).catch();
        }
    }
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" يا ليل وش تبي يا ورع !!");
    }
});



client.on("ready", () => {
    client.user.setGame("on " + client.users.size + " users")
}).on("guildCreate", () => {
    client.user.setGame("on " + client.users.size + " users")
}).on("guildDelete", () => {
    client.user.setGame("on " + client.users.size + " users")
})


client.on('message',message =>{
    var prefix = "+";
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("صوره بوتك هنا")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });
  
  
  
  client.on('message', message => {
      const embed = new Discord.RichEmbed();
    if (message.content.startsWith("+server")) {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
      let region = {
          "brazil": "Brazil",
          "eu-central": "Central Europe",
          "singapore": "Singapore",
          "us-central": "U.S. Central",
          "sydney": "Sydney",
          "us-east": "U.S. East",
          "us-south": "U.S. South",
          "us-west": "U.S. West",
          "eu-west": "Western Europe",
          "vip-us-east": "VIP U.S. East",
          "london": "London",
          "amsterdam": "Amsterdam",
          "hongkong": "Hong Kong"
      };
 
      var emojis;
      if (message.guild.emojis.size === 0) {
          emojis = 'None';
      } else {
          emojis = message.channel.guild.emojis.map(e => e).join(" ");
      }
  embed.setAuthor(message.guild.name, message.guild.iconURL ? message.guild.iconURL : client.user.displayAvatarURL)
  .setThumbnail(message.guild.iconURL ? message.guild.iconURL : me.user.displayAvatarURL)
  .addField("• Created", `${message.guild.createdAt.toString().substr(0, 15)},\n${checkDays(message.guild.createdAt)}`, true)
  .addField("• ID", message.guild.id, true)
  .addField("• Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
  .addField("• Region", region[message.guild.region], true)
  .addField("• Members", message.guild.memberCount, true)
  .addField("• Roles", message.guild.roles.size, true)
  .addField("• Channels", message.guild.channels.size, true)
  .addField("• Emojis", emojis, true)
  .addField("• Verification Level", verifLevels[message.guild.verificationLevel], true)
  .addField("• Default Channel", message.guild.defaultChannel, true)
  .setColor(3447003)
  message.channel.send({embed});
  }
});
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
    };
	
	client.on('message', msg => {
  if (msg.content === 'fuck') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});



client.on('message', message => {
    if(message.content.includes('discord.gg/')) {
        if(message.member.hasPermission('ADMINISTRATOR')) return;
        message.delete();
        message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
        let embedP = new Discord.RichEmbed()
        .setTitle('❌ | تمت معاقبتك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر روابط اضافة الى سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الاسكات عن طريق الخطأ الرجاء التوجه والتكلم مع الادآرة**`)
        .addField(`by`,`Hello,Im'iiLizx`)
        .setColor('RED')
        .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.guild.name} Server`, message.guild.iconURL)
        
        message.channel.send(embedP);
    }
});


  
  client.on('message',message =>{
      var prefix = "+";
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'myinv') {
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.RichEmbed()
      .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
      .setColor('#36393e')
      message.channel.send(e)
  }else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invites in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invites in ${message.guild.name}`, `Invites :\n${codes.join("\n")}`)
.setColor('#36393e')
message.channel.send({ embed: embed });
return;
}
})
}

});









client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
});




var cats = [
 
"https://cdn.discordapp.com/attachments/477840502583066624/489925349480595471/c8458dcb83ef3f51eb67871656460acda8008de1_hq.jpg",
"https://cdn.discordapp.com/attachments/471048168734326784/489926293945843722/D986D983D8AA-D8B9D986-D8A7D984D8A8D986D8A7D8AA-4.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926344956837918/D986D983D8AA-D986D983D8A7D8AA-D986D983D8AA-D985D8B6D8ADD983D8A9-130.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926377219555328/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926396878127114/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926441497001984/75e9de50bbe56adfa2dd0d79765618f3_400x400.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926523143585793/maxresdefault.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926558975262721/D986D983D8AAD8A9-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926561441513482/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926572699025408/83efa282386a3c97b55b554e12034f09.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926573823361037/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927028988968970/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927039474991117/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927054238679052/hqdefault.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927075751395338/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927100300525568/screen-16.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927135952240666/D986D983D8AAD987.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927196056748032/1462535501-kololk.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927216474357771/52ec73eb7867b5d69fe2573c695ddec0ef59aaae_00.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927223055220736/10352280_326716524148020_473570926368633860_n.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927225953615872/84.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927310246674432/D8B5D988D8B1-D986D983D8AA-D985D8B6D8ADD983D8A9-D8ACD8AFD8A7-500x380.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927542812180493/D8B5D988D8B1-D986D983D8AA-2.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927575783735316/750a293b4222503c2c82ea351795d82d94d394bd_hq.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927587653615626/joke.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927610260914178/D8B5D988D8B1-D986D983D8AA-32.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927618972352547/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927638794764288/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927661502857226/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927734458581002/665.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927737738526721/D986D983D8AA-D985D8B6D8ADD983D8A9-5.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927741555343405/5L756426.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927775168233493/27-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928045449314356/D986D983D8AA.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928124188852226/C_0g73iVYAARXkq.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928134347587604/almastba.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928135379517440/e3b1c8571e56805fc07e776eb5fd46df-best-funny-images-arabic-jokes.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928158141743112/PIC-724-1452961611-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928201116581888/do.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928210126077955/21581874-v2_xlarge.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928236390940698/D986D983D8AA-D985D8B6D8ADD983D8A9-3.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928244293009408/D986D983D8AA-D986D983D8A7D8AA-D986D983D8AA-D985D8B6D8ADD983D8A9-128.png"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + " نكت" )) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});






client.on('message', message => {
    if (message.content === "+server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','!')
         message.channel.send({embed:xNiTRoZ});
     }
    });

	
    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='+members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| الاونلاين ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

	


client.on("message", message => {
    var prefix = "+";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("+clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا حياك الله***, ${member}`);
  
});


client.on("guildCreate", guild => {
  console.log(` شخص ما اضاف بوت  في سيرفر اسمه ! ${guild.name} اونر سيرفر هو ${guild.owner.user.username}!`)
});



client.on('message', message => {
  if (true) {
if (message.content === '+support') {
      message.author.send(' https://discord.gg/ySnVHNd لـ أي استفسار').catch(e => console.log(e.stack));

    }
   } 
  });
  
  
  
  
  client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "", // rainbow
      guildid: "", // 463277981146808331
      sec: 2 // 3
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("467173507613065237").send({ embed: stewart });
    }
});



client.on('message', message => {
   if (message.content === "+id2") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("NAME› ",`${message.author.username}`, true)
  .addField('Tag›',"#" +  message.author.discriminator, true)
  .addField("ID›", message.author.id, true)
  .addField("Create›", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
})




client.on('message',async msg => {
  if(msg.content.startsWith("+stats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **لا تملك صلاحية**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
    msg.guild.createChannel(`👑معلومات البوت👌` , 'category')
  
       msg.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),   
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`${client.user.tag}`);
 },1000);
  });
  msg.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`${client.users.size} <-- 『الاعضاء』 `);
 },1000);
  });
    msg.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`${client.channels.size} <-- 『الرومات』 `);
 },1000);
  });
    msg.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`${client.guilds.size} <-- 『السيرفرات』 `);
 },1000);
  });
     msg.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),   
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`${prefix} <-- 『البرفكس』 `);
 },1000);
  });
}
});





client.on('message', message => {
    if (message.content === "+id3") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setTitle(`info about ${message.guild.name}`)
   .addField("Server Owner 👑",`➥ ` + `${message.guild.owner.user.username}`, true)
   .addField('Server ID 🆔',`➥` + message.guild.id, true)
   .addField("Owner Tag",`➥ ` +  `#` + message.guild.owner.user.discriminator, true)
   .addField("Owner ID 🆔",`➥ ` + message.guild.owner.user.id, true)
   .addField("Server Region📡",`➥ ` + message.guild.region, true)
   .addField("Server Member Size🏧",`➥ ` + message.guild.members.size, true)
   .addField("Server Channels Number🏧",`➥ ` + message.guild.channels.size, true)
   .addField("Server Roels Number🏧",`➥ ` + message.guild.roles.size, true)
   .addField("AFK channel💤",`➥ ` + message.guild.afkChannel || 'Null', true)
   .addField("Server Created AT",`➥ ` + message.guild.createdAt, true)
   .addField(`info about ${message.author.username}`, `➥ `)
   .addField("Name",`➥ ` + `${message.author.username}`, true)
   .addField('Tag',`➥ ` + "#" +  message.author.discriminator, true)
   .addField("ID 🆔",`➥ ` + message.author.id, true)
   .addField(" Account Created At",`➥ ` + message.author.createdAt, true)
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL)
      
      
   message.channel.sendEmbed(embed);
     }
 });
 
 
 
 
 client.on('message', message => {
if(message.content.startsWith("+slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});


client.on ('message',async Sal => { //By Salto7#4595
    let embed = new Discord.RichEmbed()
    if (Sal.content === "+id4") {
      let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setThumbnail(Sal.author.avatarURL)
     .setImage(Sal.author.avatarURL)
     .addField("اسمك:",`${Sal.author.username}`, true)
     .addField('ايديك:',"" +  Sal.author.id, true)
     .addField('تاقك', Sal.author.discriminator, true)
     .addField('تم الانشاء في', Sal.author.createdAt, true)
     Sal.channel.sendEmbed(embed);
    }
  });
  
  
  client.on('message', message => {

    if (message.content === "+mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "+umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});





client.on('message' , message => {
    var prefix = "+";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});


client.on('message', message => {
            if (message.content.startsWith(prefix + "news")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     ** code print ** ' ,' *تم اضافة كود ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});




client.on("ready", () => {
    client.user.setGame("on " + client.users.size + " users")
}).on("guildCreate", () => {
    client.user.setGame("on " + client.users.size + " users")
}).on("guildDelete", () => {
    client.user.setGame("on " + client.users.size + " users")
})




client.on('message' , najzx => {
          var prefix = "+";
          if(najzx.author.bot) return;
         
          if(najzx.content.startsWith(prefix + "rolebc")) {
            if (!najzx.member.hasPermission("ADMINISTRATOR"))  return;
            let args = najzx.content.split(" ").slice(1);
         
            if(!args[0]) {
              najzx.channel.send("قم بمنشنة الرتبة | +rolebc @everyone الرساله")
                return;
            }
            if(!args[1]) {
              najzx.channel.send("قم بكتابة الرسالة | +rolebc @everyone الرساله")
                return;
            }
         
              if(args[0] == "@everyone") {
                najzx.channel.send(`لقد تم ارسال هذه الرسالة الى ${najzx.guild.memberCount} اعضاء`)
                najzx.guild.members.forEach(m => {
                  m.send(
                  "**" + "السيرفر :" + "\n" +
                  `${najzx.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${najzx.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                return;
              }
         
                  var role = najzx.mentions.roles.first();
                    if(!role) {
                      najzx.reply("لا توجد رتبة بهذا الاسم")
                        return;
                    }
                najzx.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
                  n.send(
                  "**" + "السيرفر :" + "\n" +
                  `${najzx.guild.name}` + "\n" +
                  "المرسل :" + "\n" +
                  `${najzx.author.tag}` + "\n" +
                  "الرسالة :" + "\n" +
                  `${args[1]}` + "**"
                  )
                })
                najzx.channel.send(`لقد تم ارسال هذه الرسالة الى ${najzx.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
            }
        });
		
		
		
		
		client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "!say") {
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("*لا تملك الصلاحيات المطلوبه**");

message.channel.send(args.join("  "))
    message.delete();
  }



});


const adminprefix = "+";
const devs = ['428890200735875073'];
    client.on('message', message => {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(adminprefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });
	  
	  
	  
	  

client.on('message', message => {
    
   if(message.member.hasPermission('MANAGE_ROLES')) 
    if (message.content === "s!cs") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "Owner ",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : "Co_Owner",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Leader",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Co_Leader",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Admin",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Member",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Youtuber",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "Bot",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Helper",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Gaming",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "vip",
       permissions :   [1],
       color : " #000000"
   }) 
})
}
 
});
client.on('message', message => {
    if (message.content === "s!cs") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

		
     message.guild.createChannel('Swlef', 'voice')
	 message.guild.createChannel('Swlef', 'voice')
	 message.guild.createChannel('Swlef', 'voice')
	 message.guild.createChannel('Music', 'voice')
	 message.guild.createChannel('Music', 'voice')
	 message.guild.createChannel('Events', 'voice')
	 message.guild.createChannel('Gaming', 'voice')
	 message.guild.createChannel('welcome', 'text')
	 message.guild.createChannel('info', 'text')
	 message.guild.createChannel('bot', 'text')
	 message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('Youtube', 'text')
	 message.guild.createChannel('Chat', 'text')
	 message.guild.createChannel('Event', 'text')
	 message.guild.createChannel('Gaming', 'text')


message.channel.sendMessage('**الرجاء الانتظار ريث ما يتم صناعة السيرفر**')
}
});


client.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   
  if (message.content === 'ping') {
      message.channel.send(`<@${message.author.id}> Ping..!`)
  }
 
 
  if (message.content.startsWith('+bcccc')) {
          if (!args[0]) {
message.channel.send("**+bccc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);
 
});
  }
 
});




client.on('message', message => {
    if (message.content === "+id") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setTitle(`info about ${message.guild.name}`)
   .addField("Server Owner 👑",`➥ ` + `${message.guild.owner.user.username}`, true)
   .addField('Server ID 🆔',`➥` + message.guild.id, true)
   .addField("Owner Tag",`➥ ` +  `#` + message.guild.owner.user.discriminator, true)
   .addField("Owner ID 🆔",`➥ ` + message.guild.owner.user.id, true)
   .addField("Server Region📡",`➥ ` + message.guild.region, true)
   .addField("Server Member Size🏧",`➥ ` + message.guild.members.size, true)
   .addField("Server Channels Number🏧",`➥ ` + message.guild.channels.size, true)
   .addField("Server Roels Number🏧",`➥ ` + message.guild.roles.size, true)
   .addField("AFK channel💤",`➥ ` + message.guild.afkChannel || 'Null', true)
   .addField("Server Created AT",`➥ ` + message.guild.createdAt, true)
   .addField(`info about ${message.author.username}`, `➥ `)
   .addField("Name",`➥ ` + `${message.author.username}`, true)
   .addField('Tag',`➥ ` + "#" +  message.author.discriminator, true)
   .addField("ID 🆔",`➥ ` + message.author.id, true)
   .addField(" Account Created At",`➥ ` + message.author.createdAt, true)
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL)
      
      
   message.channel.sendEmbed(embed);
     }
 });
 
 
 
 



client.on('message',message =>{
    var prefix = "+";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://media.discordapp.net/attachments/477570106755383307/479229377037598720/22713057_151850495552450_709700562_o.jpg?width=201&height=201")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
