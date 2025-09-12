const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const chalk = require('chalk-v2');

// Bot-Token
const token = 'MTQxNTc1MDM5MTc3MzAwNzk1Mg.Ginv1Q.98RT1J9CUOZpcXcir5vaKoy7iAHwgCq0KgPDdQ';

client.on('ready', async (readyClient) => {
    console.log(chalk.italic.hex('#ff0000').italic('[LRP-SYSTEM]'), chalk.italic.hex('#ffffff')('- [by Brxtty] |'), chalk.bold.hex('#00BFFF')('Der Bot ist erfolgreich gestartet.'), chalk.reset());
    client.user.setActivity('LARP-SYSTEM', { type: 'PLAYING' });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand() && !interaction.isButton()) return;

    // Gift Card Embed mit Button
    if (interaction.isCommand() && interaction.commandName === 'send-embed') {
        if (interaction.member.permissions.has('Administrator')) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: 'G!ft C4rds',
                iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&',
            })
            .setColor(0xFF0000)
            .setTitle('G!ft C4rds Pr0ducts <:Card:1416166263675293866>')
            .setDescription(
                `- **League Of Legends** <:lol:1416166673945329694>` +
                `\n- **Roblox** <:Robux:1416166419539951731>` +
                `\n- **Fortnite** <:Fortnite:1416168194770600108>` +
                `\n- **EA Sports** <:ea:1416166551295492137>` +
                `\n- **Valorant** <:Valorant:1416070443361894435>` +
                `\n- **Razer Gold** <:razer:1416168635839418539>` +
                `\n- **Steam** <:steam:1416168755460968579>` +
                `\n- **PlayStation** <a:playsi:1416166359565467779>` +
                `\n- **Xbox** <:Xbox:1416169001377202317>`,
            )            
            .setThumbnail(url="https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&")
            .setImage(url="https://media.discordapp.net/attachments/1373751523280162866/1375860145069752350/gift-card-deals.png?ex=68c4e6dc&is=68c3955c&hm=2d5f1d7a43311d26b1c501c159b4e765a789b68179b9ba10dd6126b9231bf897&=&format=webp&quality=lossless&width=1650&height=864")
            //.setImage(Config.Settings['bilder'].banner)
            .setTimestamp(new Date(Date.now()))            
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        const gutschein1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('lol')
                    .setLabel('Leage of Legends')
                    .setEmoji('<:lol:1416166673945329694>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('roblox')
                    .setLabel('Roblox')
                    .setEmoji('<:Robux:1416166419539951731>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('fortnite')
                    .setLabel('Fortnite')
                    .setEmoji('<:Fortnite:1416168194770600108>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('ea')
                    .setLabel('EA Sports')
                    .setEmoji('<:ea:1416166551295492137> ')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('valorant')
                    .setLabel('EA Sports')
                    .setEmoji('<:Valorant:1416070443361894435>')
                    .setStyle(ButtonStyle.Danger),
            );
        const gutschein2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('razer')
                    .setLabel('Razor Gold')
                    .setEmoji('<:razer:1416168635839418539>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('steam')
                    .setLabel('Steam')
                    .setEmoji('<:steam:1416168755460968579>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('playsi')
                    .setLabel('PlayStation')
                    .setEmoji('<a:playsi:1416166359565467779>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('xbox')
                    .setLabel('Xbox')
                    .setEmoji('<:Xbox:1416169001377202317>')
                    .setStyle(ButtonStyle.Danger),
            );
        await interaction.channel.send({
            embeds: [embed],
            components: [gutschein1, gutschein2]
        });
        //interaction.editReply({ content: 'Aktion erfolgreich ausgeführt.', ephemeral: true });
    } else {
        interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
    }

    // Interaktion mit dem Button
    if (interaction.isButton() && interaction.customId === 'lol') {
        const lol_embed = new EmbedBuilder()
             .setColor(0xFF0000)
            //.setAuthor({ name: 'Wild Rift' })
            .setTitle('League Of Legends <:lol:1416166673945329694>')
            .setDescription(
                `**League of Legends G!ft C4rd 10€ Riot Key - EUROPE = 38 DT**\n` +
                `**League of Legends G!ft C4rd 5€ Riot Key - EUROPE = 20 DT**\n` +
                `**League of Legends G!ft C4rd 15€ Riot Key - EUROPE = 60 DT**\n` +
                `**League of Legends G!ft C4rd 20€ Riot Key - EUROPE = 74 DT**\n` +
                `**League of Legends G!ft C4rd 25€ Riot Key - EUROPE = 94 DT**\n` +
                `**League of Legends G!ft C4rd 50€ Riot Key - EUROPE = 190 DT**\n` +
                `**League of Legends G!ft C4rd 100€ Riot Key - EUROPE = 360 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setFooter({ text: 'made by rakiservice.xyz' })
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375855219895832716/E629ivCVoAAsHrU.png?ex=68c58b06&is=68c43986&hm=f1f53579d9efdd7269e50a9b2f1e5e5149e42489319ac6088b8bef04d74dd606&');

        await interaction.reply({
            embeds: [lol_embed],
            ephemeral: true
        });
    }
    } else if (interaction.isButton() && interaction.customId === 'roblox') {
        const roblox_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('Roblox <:Robux:1416166419539951731>')
            .setDescription(
                `**400 Robux C4rd = 20 DT**\n` +
                `**800 Robux C4rd = 40 DT**\n` +
                `**1700 Robux C4rd = 80 DT**\n` +
                `**4500 Robux C4rd = 190 DT**\n` +
                `**22500 Robux C4rd = 380 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375855380927742084/old-roblox-banners-v0-r4f8zs85om7b1.png?ex=68c58b2c&is=68c439ac&hm=ef4b458857a2c203dc0ffa5b061e87ee24ba7be17343d3a41c723ce51bb2d125&')
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        await interaction.reply({
            embeds: [roblox_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'fortnite') {
        const fn_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('Fortnite <:Fortnite:1416168194770600108>')
            .setDescription(
                `**1000 V-Bucks = 27 DT**\n` +
                `**2800 V-Bucks = 70 DT**\n` +
                `**5000 V-Bucks = 170 DT**\n` +
                `**13500 V-Bucks = 360 DT**\n\n` +
                `**Fortnite -1 Month Crew, All Platform = 25 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375855769412567111/4889c39ff92e95f1e2ae20cb920ce974.png?ex=68c58b89&is=68c43a09&hm=e690f5259286c7350f5707bc89432afc2052a3dd79dc6f93d1b1d426fa5dcc79&')
            .setTimestamp()
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        await interaction.reply({
            embeds: [fn_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'ea') {
        const ea_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('EA Sports <:ea:1416166551295492137>')
            .setDescription(
                `**1050 FC P0ints = 46 DT**\n` +
                `**2800 FC P0ints= 100 DT**\n` +
                `**5900 FC P0ints= 200 DT**\n` +
                `**12000 FC P0ints= 470 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375854533435195505/r4McDTn.png?ex=68c58a62&is=68c438e2&hm=348bbb492c905020170a474c4918c88f423e187554f5ec4d8831b27fdf280c18&')
            .setTimestamp()
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        await interaction.reply({
            embeds: [ea_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'valorant') {
        const valorant_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('Valorant <:Valorant:1416070443361894435>')
            .setDescription(
                `- **Valorant EUR P0ints:**\n` +
                `**475 Valorant P0ints = 20 DT**\n` +
                `**1000 Valorant P0ints = 40 DT**\n` +
                `**2050 Valorant P0ints = 80 DT**\n` +
                `**3650 Valorant P0ints = 140 DT**\n` +
                `**5350 Valorant P0ints = 200 DT**\n` +
                `**11000 Valorant P0ints = 400 DT**\n\n` +
                `- **Valorant Turkey P0ints:**\n` +
                `**120 Valorant P0ints = 13 DT**\n` +
                `**250 Valorant P0ints = 32 DT**\n` +
                `**450 Valorant P0ints = 55 DT**\n` +
                `**850 Valorant P0ints = 95 DT**\n` +
                `**1400 Valorant P0ints = 190 DT**\n` +
                `**1230 Valorant P0ints = 140 DT**\n` +
                `**500 Valorant P0ints = 60 DT**\n` +
                `**2450 Valorant P0ints = 250 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375855904708362240/valorant-heroes-grayscale-banner.png?ex=68c58ba9&is=68c43a29&hm=85b48d27eb6b08263a88d9db7fa2eabd5fa8987321e58e2051adc827f52f1ce4&')
            .setTimestamp()
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        await interaction.reply({
            embeds: [valorant],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'razer') {
        const razer_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('Razer Gold <:razer:1416168635839418539>')
            .setDescription(
                `**5$ Razer Gold = 20 DT**\n` +
                `**$10 Razer Gold = 40 DT**\n` +
                `**$20 Razer Gold = 77 DT**\n` +
                `**$50 Razer Gold = 180 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375856359395950604/razer_banner_1320x480-min.png?ex=68c58c16&is=68c43a96&hm=1e93e3cf73581cc815abbf8d828c5ae035689ccdbf09cfa11820b34f609c14af&')
            .setTimestamp()
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        await interaction.reply({
            embeds: [razer_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'steam') {
        const steam_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('Steam <:steam:1416168755460968579>')
            .setDescription(
                `**$5 Steam C4rd = 20 DT**\n` +
                `**$10 Steam C4rd = 40 DT**\n` +
                `**$25 Steam C4rd = 100 DT**\n` +
                `**$50 Steam C4rd = 200 DT**\n` +
                `**$100 Steam C4rd = 400 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375856031489331251/steam-logo-welcome-banner.png?ex=68c58bc8&is=68c43a48&hm=b54b72c0e5b5d59dc8cd8b555719174cf2a7f623b4dd218b95020b62eca99bf3&')
            .setTimestamp()
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        await interaction.reply({
            embeds: [steam_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'playsi') {
        const playsi_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('PlayStation <a:playsi:1416166359565467779>')
            .setDescription(
                `**$10 PSN C4rd = 36 DT**\n` +
                `**$20 PSN C4rd = 70 DT**\n` +
                `**$25 PSN C4rd = 85 DT**\n` +
                `**$50 PSN C4rd = 170 DT**\n` +
                `**$100 PSN C4rd = 330 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375856504204165230/b6ccaa40-a2cd-4d2d-8bff-c34962e0e567-profile_banner-480.png?ex=68c58c38&is=68c43ab8&hm=515b4354723cf056328b015d8fcceac29d0357a12f1c5117890fe894a3133ea5&')
            .setTimestamp()
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        await interaction.reply({
            embeds: [playsi_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'xbox') {
        const xbox_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('Xbox <:Xbox:1416169001377202317>')
            .setDescription(
                `**$5 Xbox C4rd = 22 DT**\n` +
                `**$10 Xbox C4rd = 40 DT**\n` +
                `**$20 Xbox C4rd = 75 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375856815488766114/xbox-banner2_1200x630.png?ex=68c58c82&is=68c43b02&hm=42eb7ecc655f8e150dd7181afa05561ba2e91aad3581cde3c394b690234e60d6&')
            .setTimestamp()
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        await interaction.reply({
            embeds: [xbox_embed],
            ephemeral: true
        });
    } 
    // Ende Gift Card Embed mit Button

    // Game Products Embed mit Button
   else if (interaction.isCommand() && interaction.commandName === 'game-embed') {
    if (interaction.member.permissions.has('Administrator')) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: 'Trap Store',
                iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&',
            })
            .setColor(0xFF0000)
            .setTitle('G4mes Pr0dcuts <a:peepogaming:1416166716119056474>')
            .setDescription(
                `- **Rust**<:__:1416166495565648004>` +
                `\n- **Grand Theft Auto V**<:GTA_5:1416166317677084682>` +
                `\n- **Forza Horizon 5**<:Forza_by_patriotLV:1416166298119045160>` +
                `\n- **EA SPORTS FC 25**<:ea:1416166551295492137>` +
                `\n- **Minecraft**<:Minecraft:1416166337784315904>` +
                `\n- **Red Dead**<:rdr2:1416166245903892672>`,
                `\n- **Euro Truck**<:euro79:1416166572665602138>`,
            )            
            .setThumbnail(url="https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&")
            .setImage(url="https://cdn.discordapp.com/attachments/1373751523280162866/1375907246449492109/gaming-panoramic-banner-composition_23-2151218994.png?ex=68c512ba&is=68c3c13a&hm=766f55b3358cd3f242562a817bebd62c171440fad8c54fa32e8f7ab0835f6878&")
            //.setImage(Config.Settings['bilder'].banner)
            .setTimestamp(new Date(Date.now()))            
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        const game1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rust')
                    .setLabel('Rust')
                    .setEmoji('<:__:1416166495565648004>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('gta5')
                    .setLabel('Grand Theft Auto V')
                    .setEmoji('<:GTA_5:1416166317677084682>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('forza')
                    .setLabel('Forza Horizon 5')
                    .setEmoji('<:Forza_by_patriotLV:1416166298119045160>')
                    .setStyle(ButtonStyle.Danger),
            );
        const game2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('fifa')
                    .setLabel('EA SPORTS FC 25')
                    .setEmoji('<:ea:1416166551295492137>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('minecraft')
                    .setLabel('Minecraft')
                    .setEmoji('<:Minecraft:1416166337784315904>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rdr2')
                    .setLabel('Red Dead')
                    .setEmoji('<:rdr2:1416166245903892672>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('euro')
                    .setLabel('Euro Truck')
                    .setEmoji('<:euro79:1416166572665602138>')
                    .setStyle(ButtonStyle.Danger),
            );

        await interaction.channel.send({
            embeds: [embed],
            components: [game1, game2]
        });
        //interaction.editReply({ content: 'Aktion erfolgreich ausgeführt.', ephemeral: true });
    } else {
        interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
    }
    }
    // Interaktion mit dem Button
    if (interaction.isButton() && interaction.customId === 'rust') {
        const rust_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Rust' })
            .setTitle('Rust Steam Acc0unt = 40 TND')
            .setDescription(
                `**kol Acc0unt nbi3ouh raw m3moul mi team te3na w enty awel wa7d bch tchrih!**\n\n` +
                `- **Acc0unt yjik b email b kol chay (fresh)**\n` +
                `- **lzmk tbdl info w securi Acc0unt t3k .. mnech ms2oulin 3al info t3 Acc0unt b3d mnbi3ouh so lzm tit2kd min kol chay meloul**\n` +
                `- **safe 100 %**\n` +
                `- **warranty lifetime (ki tibda mochkla mil side t3na akahaw)**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setFooter({ text: 'made by rakiservice.xyz' })
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375907350283685959/25907-999b36da1792bf1fb164abce41229005.png?ex=68c5bb93&is=68c46a13&hm=c6dd98878c4e9d00bf619698bac90baa18e802e2827e49d4de16cf1893d703ae&');

        await interaction.reply({
            embeds: [rust_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'gta5') {
        const gta5_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Grand Theft Auto V' })
            .setTitle('Grand Theft Auto (Steam Key) = 50 TND')
            .setDescription(
                `**kol Acc0unt nbi3ouh raw m3moul mi team te3na w enty awel wa7d bch tchrih!**\n\n` +
                `- **Acc0unt yjik b email b kol chay (fresh)**\n` +
                `- **lzmk tbdl info w securi Acc0unt t3k .. mnech ms2oulin 3al info t3 Acc0unt b3d mnbi3ouh so lzm tit2kd min kol chay meloul**\n` +
                `- **safe 100 %**\n` +
                `- **warranty lifetime (ki tibda mochkla mil side t3na akahaw)**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375907357296693268/s0pldgzgl2i5oqwo49cfkwlb52rf.png?ex=68c5bb95&is=68c46a15&hm=285570722b0ffd3c40811e6fefc7fa8a3ac199be9fdee65ceba549261e0ac3bd&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [gta5_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'forza') {
        const forza_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Forza Horizon 5' })
            .setTitle('Forza Horizon 5 Steam Acc0unt = 30 TND')
            .setDescription(
                `**kol Acc0unt nbi3ouh raw m3moul mi team te3na w enty awel wa7d bch tchrih!**\n\n` +
                `- **Acc0unt yjik b email b kol chay (fresh)**\n` +
                `- **lzmk tbdl info w securi Acc0unt t3k .. mnech ms2oulin 3al info t3 Acc0unt b3d mnbi3ouh so lzm tit2kd min kol chay meloul**\n` +
                `- **safe 100 %**\n` +
                `- **warranty lifetime (ki tibda mochkla mil side t3na akahaw)**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375907403089842226/images.png?ex=68c5bba0&is=68c46a20&hm=02d8f9cad2ccf6891ec46c176a7b2b1af9a95a5c019b304ca7bbfeab4cece891&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [forza_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'fifa') {
        const fifa_emed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Minecraft' })
            .setTitle('Minecraft Acc0unt java+bedrock editio = 35 TND')
            .setDescription(
                `**kol Acc0unt nbi3ouh raw m3moul mi team te3na w enty awel wa7d bch tchrih!**\n\n` +
                `- **Acc0unt yjik b email b kol chay (fresh)**\n` +
                `- **lzmk tbdl info w securi Acc0unt t3k .. mnech ms2oulin 3al info t3 Acc0unt b3d mnbi3ouh so lzm tit2kd min kol chay meloul**\n` +
                `- **safe 100 %**\n` +
                `- **warranty lifetime (ki tibda mochkla mil side t3na akahaw)**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375907477421424691/fc-25-banner.png?ex=68c5bbb1&is=68c46a31&hm=b4511ba371e03aac658e56456fec996c293295c399ecdf3f1406c4fdb52061ef&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [fifa_emed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'minecraft') {
        const minecraft_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Red Dead' })
            .setTitle('Red Dead 5 Steam Acc0unt = 55 TND')
            .setDescription(
                `**kol Acc0unt nbi3ouh raw m3moul mi team te3na w enty awel wa7d bch tchrih!**\n\n` +
                `- **Acc0unt yjik b email b kol chay (fresh)**\n` +
                `- **lzmk tbdl info w securi Acc0unt t3k .. mnech ms2oulin 3al info t3 Acc0unt b3d mnbi3ouh so lzm tit2kd min kol chay meloul**\n` +
                `- **safe 100 %**\n` +
                `- **warranty lifetime (ki tibda mochkla mil side t3na akahaw)**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375907541292159136/minecraft-banner.png?ex=68c5bbc0&is=68c46a40&hm=351d8f1e214d216a32191cdd3c31e0954807cc9c7bf759ac8b18b4d9ca19e905&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [minecraft_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'rdr2') {
        const rdr2_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Euro Truck' })
            .setTitle('Euro Truck Steam Acc0unt = 15 TND')
            .setDescription(
                `**kol Acc0unt nbi3ouh raw m3moul mi team te3na w enty awel wa7d bch tchrih!**\n\n` +
                `- **Acc0unt yjik b email b kol chay (fresh)**\n` +
                `- **lzmk tbdl info w securi Acc0unt t3k .. mnech ms2oulin 3al info t3 Acc0unt b3d mnbi3ouh so lzm tit2kd min kol chay meloul**\n` +
                `- **safe 100 %**\n` +
                `- **warranty lifetime (ki tibda mochkla mil side t3na akahaw)**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375907624780042273/CvD7OUTXEAAgRX-.png?ex=68c5bbd4&is=68c46a54&hm=d8ebeaec61e139607624d54e17931ea183b1e6c2676262de43a289d26841167c&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [rdr2_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'euro') {
        const euro_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Grand Theft Auto V' })
            .setTitle('Grand Theft Auto (Steam Key) = 50 TND')
            .setDescription(
                `**kol Acc0unt nbi3ouh raw m3moul mi team te3na w enty awel wa7d bch tchrih!**\n\n` +
                `- **Acc0unt yjik b email b kol chay (fresh)**\n` +
                `- **lzmk tbdl info w securi Acc0unt t3k .. mnech ms2oulin 3al info t3 Acc0unt b3d mnbi3ouh so lzm tit2kd min kol chay meloul**\n` +
                `- **safe 100 %**\n` +
                `- **warranty lifetime (ki tibda mochkla mil side t3na akahaw)**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375907677670080652/Euro-Truck-Simulator-2-banner.png?ex=68c5bbe1&is=68c46a61&hm=84b5c11c4e47159245eee9b01f75f2ae415a3e201c584c9c917c2c41cb0991a4&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [euro_embed],
            ephemeral: true
        });
    }
    // Ende Game Products Embed mit Button

    // Anfang Phone Games

    // Game Products Embed mit Button
   else if (interaction.isCommand() && interaction.commandName === 'phone-embed') {
    if (interaction.member.permissions.has('Administrator')) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: 'Trap Store',
                iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&',
            })
            .setColor(0xFF0000)
            .setTitle('Phone Games P0ints <a:mobile30:1416166686993809460>')
            .setDescription(
                `- **Wild Rift** <:lol:1416166673945329694>` +
                `\n- **Blood Strike**<:images:1416166655243063337>` +
                `\n- **Free Fire**<:free_fire48:1416166636821680248>` +
                `\n- **PUBG Mobile**<:PUBG:1416166380734124203>` +
                `\n- **Roblox**<:Robux:1416166419539951731>` +
                `\n- **Efootball 2024**<:ea:1416166551295492137>`,
            )            
            .setThumbnail(url="https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&")
            .setImage(url="https://cdn.discordapp.com/attachments/1373751523280162866/1375907246449492109/gaming-panoramic-banner-composition_23-2151218994.png?ex=68c512ba&is=68c3c13a&hm=766f55b3358cd3f242562a817bebd62c171440fad8c54fa32e8f7ab0835f6878&")
            //.setImage(Config.Settings['bilder'].banner)
            .setTimestamp(new Date(Date.now()))            
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        const handy1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('wild')
                    .setLabel('Wild Rift')
                    .setEmoji('<:lol:1416166673945329694>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('strike')
                    .setLabel('Blood Strike')
                    .setEmoji('<:images:1416166655243063337>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('fire')
                    .setLabel('Free Fire')
                    .setEmoji('<:free_fire48:1416166636821680248>')
                    .setStyle(ButtonStyle.Danger),
            );
        const handy2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('pubg')
                    .setLabel('PUBG Mobile')
                    .setEmoji('<:PUBG:1416166380734124203>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('roblox')
                    .setLabel('Roblox')
                    .setEmoji('<:Robux:1416166419539951731>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('handy_fifa')
                    .setLabel('Efootball 2024')
                    .setEmoji('<:ea:1416166551295492137>')
                    .setStyle(ButtonStyle.Danger),
            );

        await interaction.channel.send({
            embeds: [embed],
            components: [handy1, handy2]
        });
        //interaction.editReply({ content: 'Aktion erfolgreich ausgeführt.', ephemeral: true });
    } else {
        interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
    }   
    }
    // Interaktion mit dem Button
    if (interaction.isButton() && interaction.customId === 'wild') {
        const wild_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Wild Rift' })
            //.setTitle('Rust Steam Acc0unt = 40 TND')
            .setDescription(
                `**425 Wild Cores = 20 DT**\n` +
                `**1000 Wild Cores = 44 DT**\n` +
                `**1850 Wild Cores = 80 DT**\n` +
                `**3275 Wild Cores = 140 DT**\n` +
                `**4800 Wild Cores = 195 DT**\n` +
                `**10000 Wild Cores = 375 DT**\n` +
                `**21000 Wild Cores = 750 DT**\n` +
                `**35000 Wild Cores = 1250 DT**\n` +
                `**50000 Wild Cores = 1750 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setFooter({ text: 'made by rakiservice.xyz' })
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375884992491683902/E72xuJkVkAAF1Nc.png?ex=68c5a6c0&is=68c45540&hm=86ea9c00f2770840cc7f173b36a9c3e2e037680ac1655cf23c64d6e8a05aa277&');

        await interaction.reply({
            embeds: [wild_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'strike') {
        const strike_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Blood Strike' })
          //  .setTitle('Grand Theft Auto (Steam Key) = 50 TND')
            .setDescription(
                `**100 Diamonds = 5 DT**\n` +
                `**300 Diamonds = 20 DT**\n` +
                `**500 Diamonds = 40 DT**\n` +
                `**1000 Diamonds = 95 DT**\n` +
                `**2000 Diamonds = 190 DT**\n` +
                `**5000 Diamonds = 380 DT**\n\n` +
                `**PASS ELITE + MOBILE/STEAM = 16 DT**\n` +
                `**PASS ELITE MOBILE/STEAM = 36 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375885153863340233/images.png?ex=68c5a6e7&is=68c45567&hm=4d7e8eb8af6c01bc1a2a86f458ef0cc25b2e5cb1c9796d82024391b4d0faf892&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [strike_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'fire') {
        const fire_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Free Fire' })
           // .setTitle('Forza Horizon 5 Steam Acc0unt = 30 TND')
            .setDescription(
                `**100 Diamonds = 5 DT**\n` +
                `**210 Diamonds = 9 DT**\n` +
                `**1166 Diamonds = 39 DT**\n` +
                `**2398 Diamonds = 70 DT**\n` +
                `**3080 Diamonds = 125 DT**\n` +
                `**530 Diamonds = 25 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375884868742811699/free-fire-banner-with-new-skins-zfn8u2w6i36z0zzv.png?ex=68c5a6a3&is=68c45523&hm=1f22f6f1f3120680eb6a6dbfd588f0cfb99c662e9c5a600eb40de05c2139f9d2&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [fire_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'pubg') {
        const pubg_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'PUBG Mobile' })
            //.setTitle('Minecraft Acc0unt java+bedrock editio = 35 TND')
            .setDescription(
                `**60 UC = 4 DT**\n` +
                `**325 UC = 25 DT**\n` +
                `**660 UC = 50 DT**\n` +
                `**1800 UC = 80 DT**\n` +
                `**3850 UC = 160 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375885240299688067/Tencent-Sees-Share-Rise-after-Games-Accepted-03-PUBG-Mobile.png?ex=68c5a6fb&is=68c4557b&hm=9958d838a9e5e5143819a31ec42be095ef0a8b3f19b55dd648f22ad354864636&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [pubg_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'roblox') {
        const roblox_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Roblox' })
            //.setTitle('Red Dead 5 Steam Acc0unt = 55 TND')
            .setDescription(
                `**400 Robux = 20 DT**\n` +
                `**800 Robux = 40 DT**\n` +
                `**1700 Robux = 80 DT**\n` +
                `**4500 Robux = 190 DT**\n` +
                `**10000 Robux = 380 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375855380927742084/old-roblox-banners-v0-r4f8zs85om7b1.png?ex=68c58b2c&is=68c439ac&hm=ef4b458857a2c203dc0ffa5b061e87ee24ba7be17343d3a41c723ce51bb2d125&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [roblox_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'handy_fifa') {
        const handy_fifa_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Efootball 2024' })
            //.setTitle('Euro Truck Steam Acc0unt = 15 TND')
            .setDescription(
                `**130 eFootball P0ints = 5 DT**\n` +
                `**550 eFootball P0ints = 19 DT**\n` +
                `**1040 eFootball P0ints = 33 DT**\n` +
                `**2130 eFootball P0ints = 64 DT**\n` +
                `**3250 eFootball P0ints = 100 DT**\n` +
                `**5700 eFootball P0ints = 160 DT**\n` +
                `**12800 eFootball P0ints = 320 DT**\n\n` +
                `**Will receive a code in ticket**\n` +
                `**That code only can be activated in your region**\n` +
                `**Easy to use**\n` +
                `**100% working with out problems and legal paid**\n\n` +
                `-# Tax Ooredoo There: https://discord.com/channels/1322398707349459018/1414394239537909780`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375885293093130311/84614fbaeba7f84915075a128a3971c8.png?ex=68c5a708&is=68c45588&hm=66b3f98ded34ded1eb37937d12475ba678157d58cfefd08968b0d4c9eb96edb7&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [handy_fifa_embed],
            ephemeral: true
        });
    } // Ende Phone Games

    else if (interaction.isCommand() && interaction.commandName === 'social-embed') {
        if (interaction.member.permissions.has('Administrator')) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: 'Trap Store',
                iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&',
            })
            .setColor(0xFF0000)
            .setTitle('Social Media Pr0ducts')
            .setDescription(
                `- **Instagram**<:yinstagram:1416165491810111629>` +
                `\n- **Facebook**<a:facebook:1416166593636991047>` +
                `\n- **Tiktok**<:youtubeshort:1416165451922280538>` +
                `\n- **Youtube**<:youtube:1416165255817466031>`
            )            
            .setThumbnail(url="https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&")
            .setImage(url="https://cdn.discordapp.com/attachments/1373751523280162866/1375829316419457106/161761324-most-popular-social-media-instagram-facebook-tiktok-youtube-icons-phone-mockup.png?ex=68c4ca26&is=68c378a6&hm=8a562ca27fe231c68610be9890b204357809380f0f591bdf67cd82d8b4251ee0&")
            //.setImage(Config.Settings['bilder'].banner)
            .setTimestamp(new Date(Date.now()))            
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        const social1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('insta')
                    .setLabel('Instagram')
                    .setEmoji('<:yinstagram:1416165491810111629>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('face')
                    .setLabel('Facebook')
                    .setEmoji('<a:facebook:1416166593636991047>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('tiktok')
                    .setLabel('Tiktok')
                    .setEmoji('<:youtubeshort:1416165451922280538>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('youtube')
                    .setLabel('Youtube')
                    .setEmoji('<:youtube:1416165255817466031>')
                    .setStyle(ButtonStyle.Danger),
            );

        await interaction.channel.send({
            embeds: [embed],
            components: [social1]
        });
        //interaction.editReply({ content: 'Aktion erfolgreich ausgeführt.', ephemeral: true });
    } else {
        interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
    }
    }

    // Interaktion mit dem Button
    if (interaction.isButton() && interaction.customId === 'insta') {
        const insta_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Instagram Pr0ducts' })
            //.setTitle('Rust Steam Acc0unt = 40 TND')
            .setDescription(
                `- **Instagram Followers:**\n` +
                `**Instagram Followers | Not Real | Refill : 60 Days = 3$**\n` +
                `**Instagram Followers | Bot - No Profile Pictures | Refill : No = 1.5$**\n` +
                `**Instagram Followers | Real | Refill: No = 2$**\n\n` +
                `- **Instagram Likes:**\n` +
                `**Instagram Likes | HQ Old Acc0unts | Refill: 30 Days = 0.5$**\n` +
                `**Instagram Likes | Bot | Refill: 30 Days = 0.045$**\n\n` +
                `- **Comment Likes:**\n` +
                `**Instagram Comments Like | Refill: No = 3$**\n\n` +
                `- **Instagram Views**\n` +
                `**Instagram Views | All Types | Refill: No = 0.02$**\n\n` +
                `- **Instagram Story Views:**\n` +
                `**Instagram Story Views | Refill: No = 0.01$**\n\n` +
                `- **Instagram Saves:**\n` +
                `**Instagram Saves | Refill: No = 0.20$**\n\n` +
                `- **Instagram Shares:**\n` +
                `**Instagram Shares | Refill: No = 0.03**\n\n` +
                `**Instagram Shares | Refill: 60 Days = 0.05$**\n\n` +
                `- **Instagram Live Video Views:**\n` +
                `**Instagram Live Video Views | Refill: Auto [Start Time: Up to 10 Mins] [Speed: 15 Mins] = 1$ **` +
                `\n\n\n` +
                `**Price Rate per 1000**\n` +
                `**Refile = إعادة التعبئة**\n` +
                `**About Instagram Services Of Social Media About Refounds or solve problems not offerd 100% and not stable 100%**\n` +
                `**I mean, there are some words in this Pr0ducts not guaranteed 100%**`,
            )
            .setTimestamp()
            .setFooter({ text: 'made by rakiservice.xyz' })
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375829402063208599/TIEzkrDX46iMbqGhwPdrlF1A1jy-Wa9eHj6WNX5FMaSu76MY32kzM72TdtRzsQySqVcvc_Xk_Dexyi7xWBGT8HM_4JLIlQNpRS7LpDdBHIfpAGGSxtGC2TAf76gWsjLDrIAH1e7-BImHORGwAS2SS9A1C4UzPtjdAHjBUlLxuBAd3lvbGzuz1BNf63wAcGel08EUl6pN.png?ex=68c572fb&is=68c4217b&hm=f055b67ad1a72ca06855d77d3928ccb2164104f18837d23b529cfea7654c1b43&');

        await interaction.reply({
            embeds: [insta_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'face') {
        const face_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Facebook Pr0ducts' })
          //  .setTitle('Grand Theft Auto (Steam Key) = 50 TND')
            .setDescription(
                `- **Facebook Page Followers:**\n` +
                `**Facebook Page Likes + Followers | Refil: 30 Days = 3.5$**\n` +
                `**Facebook Page Followers | Refill: 30 Days = 3$**\n\n` +
                `- **Facebook Profile Followers:**\n` +
                `**Facebook Profile Followers | Refill: 30 Days = 3$**\n\n` +
                `- **Facebook Page Likes:**\n` +
                `**Facebook Page Likes + Followers | Refil : 30 Days = 3.5$**\n` +
                `**Facebook Post Likes | Refill: No = 1.5$ **\n\n` +
                `- **Facebook Post Reactions**\n` +
                `**Facebook Post Reactions | Like (👍 ❤️ 😂 🤗 😲 😥 🤬) | Real | No Refill = 1.5$**\n\n` +
                `- **Facebook Post Shares:**\n` +
                `**Facebook Post/Photo Shares | Refill: No = 0.3$**\n\n` +
                `- **Facebook Comment Likes:**\n` +
                `**Facebook Comment Likes | Refill: 30 Days = 3$**\n\n` +
                `- **Facebook Video/Reels Views:**\n` +
                `**Facebook Video/Reels Views | Refill: No = 0.004$**\n\n` +
                `- **Facebook Live Stream Views:**\n` +
                `**Facebook Live Stream Views | 15 Minutes | Concurrent = 1$**\n` +
                `\n\n\n` +
                `**Price Rate per 1000**\n` +
                `**Refile = إعادة التعبئة**\n` +
                `**About Instagram Services Of Social Media About Refounds or solve problems not offerd 100% and not stable 100%**\n` +
                `**I mean, there are some words in this Pr0ducts not guaranteed 100%**`,
            )
            .setTimestamp()
            //.setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375885153863340233/images.png?ex=68c5a6e7&is=68c45567&hm=4d7e8eb8af6c01bc1a2a86f458ef0cc25b2e5cb1c9796d82024391b4d0faf892&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [face_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'tiktok') {
        const tiktok_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Tiktok Pr0ducts' })
           // .setTitle('Forza Horizon 5 Steam Acc0unt = 30 TND')
            .setDescription(
                `- **Tiktok Followers:**\n` +
                `**Tiktok Followers | Real-Proper Names | Refill: 30 Days = 3.5$**\n` +
                `**TikTok Followers | Real | Refill:No = 3$**\n\n` +
                `- **Tiktok Views:**\n` +
                `**Tiktok Views | Refill: No = 0.001$**\n` +
                `**Tiktok Views | Refill: 30 Days = 0.001$**\n\n` +
                `- **Tiktok Live Stream:**\n` +
                `**Tiktok Live Stream Views | Non-Drop = 1.5$**\n\n` +
                `- **TikTok Livestream Views | With Positive Comments**\n` +
                `**Tiktok Live Stream Views + Positive Comments | 15 Minutes = 1$**\n\n` +
                `- **Tiktok Likes:**\n` +
                `**Tiktok Likes | Refill: No = 0.12$**\n` +
                `**Tiktok Likes | Refill: 30 Days = 0.5$**\n\n` +
                `- **TikTok Shares:**\n` +
                `**TikTok Shares | Refill: 30 Days = 0.1$**\n\n` +
                `- **Tiktok Saves:**\n` +
                `**TikTok Video Saves [Refill: 30 Days] [Start Time: 0-1 Hour] = 0.5$**\n\n` +
                `\n\n\n` +
                `**Price Rate per 1000**\n` +
                `**Refile = إعادة التعبئة**\n` +
                `**About Instagram Services Of Social Media About Refounds or solve problems not offerd 100% and not stable 100%**\n` +
                `**I mean, there are some words in this Pr0ducts not guaranteed 100%**`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375829539174748281/TikTok-Banner.png?ex=68c5731b&is=68c4219b&hm=26fc3ea1b13dba08e52be75e2a2dccac6878b142985662342927860b02c31562&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [tiktok_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'youtube') {
        const youtube_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Youtube Pr0ducts' })
            //.setTitle('Minecraft Acc0unt java+bedrock editio = 35 TND')
            .setDescription(
                `- **Youtube Views:**\n` +
                `**Youtube Views | Refill : 60 Days = 2$**\n\n` +
                `- **YouTube Live Stream - 100% Concurrent:**\n` +
                `**Youtube Live Stream 15 Minutes = 0.5$**\n\n` +
                `- **Youtube Subscribers | Non-Drop 100% Real HQ Youtube Subscribers | Non-Drop 100% Real HQ:**\n` +
                `**Youtube Subscribers | Non-Drop | Refill: 120 Days = 3$**\n\n` +
                `- **Youtube Likes**\n` +
                `**Youtube Likes | Non-Drop | Refill: 30 Days = 0.5$**\n\n` +
                `- **Youtube Comment Likes Youtube Comment Likes:**\n` +
                `**Youtube Comment Likes | Refill: 30 Days = 1$**\n\n` +
                `- **Youtube Shares Youtube Shares:**\n` +
                `**Youtube Shares | Refill: Lifetime = $0.6$**\n\n` +
                `\n\n\n` +
                `**Price Rate per 1000**\n` +
                `**Refile = إعادة التعبئة**\n` +
                `**About Instagram Services Of Social Media About Refounds or solve problems not offerd 100% and not stable 100%**\n` +
                `**I mean, there are some words in this Pr0ducts not guaranteed 100%**`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375829665519894618/youtube-ap-hero-2.png?ex=68c57339&is=68c421b9&hm=f5fde13975994e43b7a905da6bbba677cf63a5c94f5674ff30af77fd2a5adadf&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [youtube_embed],
            ephemeral: true
        });
    } // Discord Embed
        else if (interaction.isCommand() && interaction.commandName === 'discord-embed') {
            if (interaction.member.permissions.has('Administrator')) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: 'Trap Store',
                iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&',
            })
            .setColor(0xFF0000)
            .setTitle('Disco0d Pr0ducts')
            .setDescription(
                `- **Disc0rd Nitr0**<a:Nitro:1416165056537694318>` +
                `\n- **Disc0rd Bo0sts**<a:zeddnitroboostinglevel:1416165089320370246>` +
                `\n- **Disc0rd Effe9ts**<:discord:1416165178868764762>`,
            )            
            .setThumbnail(url="https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&")
            .setImage(url="https://cdn.discordapp.com/attachments/1373751523280162866/1375632772756017244/654580c0a25af460db3ebc23_DIS20MKT20NITRO20DROP20Blog20Header.png?ex=68c5649b&is=68c4131b&hm=ab690b386329d59be9a4bf4d3b7ac2d90f831e08292ca85a76665470e2a5e82b&")
            //.setImage(Config.Settings['bilder'].banner)
            .setTimestamp(new Date(Date.now()))            
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        const discord = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('nitro')
                    .setLabel('Nitr0')
                    .setEmoji('<a:Nitro:1416165056537694318>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('boost')
                    .setLabel('Bo0sts')
                    .setEmoji('<a:zeddnitroboostinglevel:1416165089320370246>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('effects')
                    .setLabel('Effe9ts')
                    .setEmoji('<:discord:1416165178868764762>')
                    .setStyle(ButtonStyle.Danger),
            )

        await interaction.channel.send({
            embeds: [embed],
            components: [discord]
        });
        //interaction.editReply({ content: 'Aktion erfolgreich ausgeführt.', ephemeral: true });
    } else {
        interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
    }
    }

    // Interaktion mit dem Button
    if (interaction.isButton() && interaction.customId === 'nitro') {
        const nitro_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Disc0rd Nitr0' })
            //.setTitle('Rust Steam Acc0unt = 40 TND')
            .setDescription(
                `- **Disc0rd Nitr0 G!ft:**\n` +
                `**Disc0rd Nitr0 G!ft | Legal = 20DT / 4.7€<:crypto:1416165583665500251>**\n` +
                `**Disc0rd Nitr0 G!ft | Illegal = 25DT / 3.5€<:crypto:1416165583665500251>**\n\n` +
                `- **Disc0rd Nitr0 G!ft Ba9ic:**\n` +
                `**Nitr0 G!ft Ba9ic | Legal = 10DT / 1.7€<:crypto:1416165583665500251>**\n` +
                `**Nitr0 G!ft Ba9ic ( YEAR ) | Illegal = 110DT / 26€<:crypto:1416165583665500251>**\n\n` +
                `- **Disc0rd Nitr0 (Activation With Acc0unt) :**\n` +
                `**Nitr0 | 1 Month = 5DT / 1€<:crypto:1416165583665500251>**\n` +
                `**Nitr0 | 3 Month = 15DT / 3€<:crypto:1416165583665500251>**\n` +
                `**Nitr0 | with Visa Card = 3DT / 0.5€<:crypto:1416165583665500251>**\n\n` +
                `\n\n\n` +
                `**About Disc0rd 1 Month and 3 Months (Acc0unt Age 1 Month + Never is impossible to own Nitr0 before)**`,
            )
            .setTimestamp()
            .setFooter({ text: 'made by rakiservice.xyz' })
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375632986644545576/Discord-Nitro-banner.png?ex=68c564ce&is=68c4134e&hm=dcfdb8cfb5ec14a57e4d94cfae83297b7c29b148d3b795caae8e002a87a4dff1&');

        await interaction.reply({
            embeds: [nitro_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'boost') {
        const boost_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Discord Boosts' })
          //  .setTitle('Grand Theft Auto (Steam Key) = 50 TND')
            .setDescription(
                `**Disc0rd Bo0sts 1 Month X14 = 15DT / 3.2€<:crypto:1416165583665500251>**\n\n` +
                `**Disc0rd Bo0sts 3 Months X14 = 50DT / 10€<:crypto:1416165583665500251>**\n`,)
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375630975312072857/669ea5dac5d8c7f72f2e7fd6_Nitro20BOGO20Header.png?ex=68c562ee&is=68c4116e&hm=e78a977b40905002ac798c4dbe2ad91ad04089f3b0d89979a850af5220c1fe91&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [boost_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'effects') {
        const effects_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Disc0rd Effe9ts' })
            .setTitle('Effe9ts With Acc0unt')
            .setDescription(
                `- **Price per d0llar 1$ : 2 TND / 0.3€<:crypto:1416165583665500251>**\n` +
                `- **Will Revive a g!ft and do accept to them**\n` +
                `- **Ur g!ft never got refounded**`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375632772756017244/654580c0a25af460db3ebc23_DIS20MKT20NITRO20DROP20Blog20Header.png?ex=68c5649b&is=68c4131b&hm=ab690b386329d59be9a4bf4d3b7ac2d90f831e08292ca85a76665470e2a5e82b&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [effects_embed],
            ephemeral: true
        });
    } 
    // Streaming Accounts
           else if (interaction.isCommand() && interaction.commandName === 'streaming-embed') {
             if (interaction.member.permissions.has('Administrator')) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: 'Trap Store',
                iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&',
            })
            .setColor(0xFF0000)
            .setTitle('Streaming Pr0ducts')
            .setDescription(
                `- **Netflix**<:netflix:1416070475976806572>` +
                `\n- **Spotify Premium**<:spotify:1416070571061543003>` +
                `\n- **Crunchyroll #**<:Crunchyroll:1416184340542390395>` +
                `\n- **Shahid VIP**<:shahid:1416184497518673971>`,
            )            
            .setThumbnail(url="https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&")
            .setImage(url="https://cdn.discordapp.com/attachments/1373751523280162866/1375632772756017244/654580c0a25af460db3ebc23_DIS20MKT20NITRO20DROP20Blog20Header.png?ex=68c5649b&is=68c4131b&hm=ab690b386329d59be9a4bf4d3b7ac2d90f831e08292ca85a76665470e2a5e82b&")
            //.setImage(Config.Settings['bilder'].banner)
            .setTimestamp(new Date(Date.now()))            
            .setFooter({ text: 'All rights reserved to Brxtty', iconURL: 'https://cdn.discordapp.com/attachments/1416049425931042928/1416145303244902491/trapstore.png?ex=68c5c797&is=68c47617&hm=500985a42e11d263bd4201af501f0e900e4540c46f5c75dd88cf4e1571e9818b&' });

        const streaming = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('netflix')
                    .setLabel('Netflix')
                    .setEmoji('<netflix:1416070475976806572>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('spotify')
                    .setLabel('Spotify Premium')
                    .setEmoji('<spotify:1416070571061543003>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('crunchyroll')
                    .setLabel('Crunchyroll')
                    .setEmoji('<Crunchyroll:1416184340542390395>')
                    .setStyle(ButtonStyle.Danger),
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('shahid')
                    .setLabel('Shahid VIP')
                    .setEmoji('<:shahid:1416184497518673971>')
                    .setStyle(ButtonStyle.Danger),
            );

        await interaction.channel.send({
            embeds: [embed],
            components: [streaming]
        });
        //interaction.editReply({ content: 'Aktion erfolgreich ausgeführt.', ephemeral: true });
    } else {
        interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
    }
    }

    // Interaktion mit dem Button
    if (interaction.isButton() && interaction.customId === 'netflix') {
        const netflix_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Netflix <netflix:1416070475976806572>' })
            //.setTitle('Rust Steam Acc0unt = 40 TND')
            .setDescription(
                `- **Netflix 720p Prices:**\n` +
                `**1 Month : 12TND**\n\n` +
                `- **Netflix 1080 Prices:**\n` +
                `**1 Month : 26 TND**\n\n` +
                `- **Netflix Prem Prices:**\n` +
                `**1 Month : 33 TND**\n\n`,
            )
            .setTimestamp()
            .setFooter({ text: 'made by rakiservice.xyz' })
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375847131373375618/BrandAssets_Logos_01-Wordmark.png?ex=68c5837e&is=68c431fe&hm=7c52a146b1a09576b56de0b910e30b3d4d330adb6490887e6b75d271b4b7130d&');

        await interaction.reply({
            embeds: [netflix_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'spotify') {
        const spotify_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Spotify Premium' })
          //  .setTitle('Grand Theft Auto (Steam Key) = 50 TND')
            .setDescription(
                `- **Spotify Individual Prices:**\n` +
                `**1 Month : 5 TND**\n` +
                `**3 Month : 12 TND**\n` +
                `**12 Month : 35 TND**\n\n` +
                `- **Spotify Family Prices:**\n` +
                `**1 Month : 10 TND**\n`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375847173727453184/2024-spotify-brand-assets-media-kit.png?ex=68c58388&is=68c43208&hm=e7d1a082fda6a30cf79c90dc0b7e9d21c4ac0e3e06d87e80e2eb5ab352f07068&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [spotify_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'shahid') {
        const shahid_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            //.setAuthor({ name: 'Shahid ' })
            .setTitle('Shahid VIP')
            .setDescription(
                `**Comming soon...**`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375847381429518436/Shahid_banner.png?ex=68c583b9&is=68c43239&hm=4b1565c14edba22f5e4e6cbfcc3be1bedf98ec4bc3bea4211b264c0dab68714c&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [shahid_embed],
            ephemeral: true
        });
    } else if (interaction.isButton() && interaction.customId === 'spotify') {
        const spotify_embed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setAuthor({ name: 'Spotify Premium' })
          //  .setTitle('Grand Theft Auto (Steam Key) = 50 TND')
            .setDescription(
                `- **Crunchyroll Fan Prices:**\n` +
                `**1 Month : 10 TND**\n` +
                `**3 Month : 18 TND**\n` +
                `**12 Month : 52 TND**\n\n` +
                `- **Crunchyroll Megafan Prices:**\n` +
                `**1 Month : 15 TND**\n` +
                `**1 Year : 98 TND**`,
            )
            .setTimestamp()
            .setImage(url='https://cdn.discordapp.com/attachments/1373751523280162866/1375847270070616124/crunchyroll.png?ex=68c5839f&is=68c4321f&hm=b2023d5776feaba5cc96e06ad447c38ad9feece13a0356e7b0745be399f23334&')
            .setFooter({ text: 'made by rakiservice.xyz' });

        await interaction.reply({
            embeds: [spotify_embed],
            ephemeral: true
        });
    } 
});

// Befehlsregistrierung (einmalig ausführen)
client.on('ready', () => {
    client.guilds.cache.forEach(async guild => {
        await guild.commands.set([
            {
                name: 'send-embed',
                description: 'sends giftcard embed.'
            },
            {
                name: 'game-embed',
                description: 'Game Product embed.'
            },
            {
                name: 'phone-embed',
                description: 'Phone Game Points embed.'
            },
            {
                name: 'social-embed',
                description: 'Social Media Pr0ducts.'
            },
            {
                name: 'discord-embed',
                description: 'Disc0rd Pr0ducts.'
            },
            { name: 'streaming-embed',
                description: 'Streaming Pr0ducts.'
            },
        ]);
    });
});

client.login(token);