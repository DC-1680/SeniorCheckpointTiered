const { db } = require('./server/db')
const { green, red } = require('chalk')
const { Student, Campus } = require('./server/db')

const seed = async () => {
  await db.sync({ force: true })

  // STUDENTS

  // \\ voyager
  const janeway = await Student.create({
    firstName: 'Kathryn',
    lastName: 'Janeway',
    email: 'kJaneway@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Janeway_Season7.jpg',
    gpa: 4.0,
  });

  const paris = await Student.create({
    firstName: 'Tom',
    lastName: 'Paris',
    email: 'tParis@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8c/TomParis.jpg',
    gpa: 2.5,
  })
  const torres = await Student.create({
    firstName: 'B\'Elanna',
    lastName: 'Torres',
    email: 'bTorres@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/86/BelannaTorres.jpg',
    gpa: 3.3,
  })

  const kim = await Student.create({
    firstName: 'Harry',
    lastName: 'Kim',
    email: 'hKim@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Garrett_Wang_as_Harry_Kim.jpg',
    gpa: 3.8,
  })
  const tuvok = await Student.create({
    firstName: 'Tuvok',
    lastName: 'Vulcan',
    email: 'tuvok@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Tuvok.jpg',
    gpa: 4.0,
  })
  const chakotay = await Student.create({
    firstName: 'chakotay',
    lastName: '??',
    email: 'chakotay@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Chakotay.jpg',
    gpa: 3.0,
  })



  // \\ next gen
  const picard = await Student.create({
    firstName: 'Jean Luc',
    lastName: 'Picard',
    email: 'jlPicard@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/20/Captain_Picard_Chair.jpg',
    gpa: 3.5,
  })
  const riker = await Student.create({
    firstName: 'William',
    lastName: 'Riker',
    email: 'wRiker@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/20/WilRiker.jpg',
    gpa: 3.2,
  })
  const laForge = await Student.create({
    firstName: 'Geordi',
    lastName: 'LaForge',
    email: 'glaForge@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/04/GeordiLaForge.jpg',
    gpa: 3.7,
  })
  const data = await Student.create({
    firstName: 'data',
    lastName: 'bot',
    email: 'data@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/09/DataTNG.jpg',
    gpa: 4.0,
  })
  const worf = await Student.create({
    firstName: 'Worf',
    lastName: 'Klingon',
    email: 'worf@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/ed/WorfTNG.jpg',
    gpa: 2.5,
  })
  const bCrusher = await Student.create({
    firstName: 'Beverly',
    lastName: 'Crusher',
    email: 'bCrusher@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Beverley_Crusher.jpg',
    gpa: 4.0,
  })
  const wCrusher = await Student.create({
    firstName: 'Wesley',
    lastName: 'Crusher',
    email: 'wCrusher@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/WesleyCrusher2366.jpg',
    gpa: 4.0,
  })
  const troi = await Student.create({
    firstName: 'Deanna',
    lastName: 'Troi',
    email: 'dtroi@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/df/DeannaTroi.jpg',
    gpa: 4.0,
  })

  // \\ Deep Space Nine
  const sisko = await Student.create({
    firstName: 'Benjamin',
    lastName: 'Sisko',
    email: 'bSisko@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/92/BenSisko.jpg',
    gpa: 3.6,
  })
  const nerys = await Student.create({
    firstName: 'Kira',
    lastName: 'Nerys',
    email: 'kNerys@ds9.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/37/KiraNerys001.jpg',
    gpa: 0.0,
  })
  const odo = await Student.create({
    firstName: 'Odo',
    lastName: 'jiggly',
    email: 'odo@ds9.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/00/Odo.jpg',
    gpa: 0.0,
  })
  const quark = await Student.create({
    firstName: 'Quark',
    lastName: 'hue-maan',
    email: 'quark@ds9.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/42/QuarkDS9.jpg',
    gpa: 0.0,
  })
  const bashir = await Student.create({
    firstName: 'Julian',
    lastName: 'Bashir',
    email: 'jBashir@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9c/JulianBashir.jpg',
    gpa: 4.0,
  })
  const dax = await Student.create({
    firstName: 'Jadzia',
    lastName: 'Dax',
    email: 'jDax@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6c/JadziaDax.jpg',
    gpa: 4.0,
  })
  const oBrien = await Student.create({
    firstName: 'Miles',
    lastName: 'O\'Brien',
    email: 'mOBrien@starfleet.com',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/7/75/Milesobrien.jpg',
    gpa: 3.4,
  })

  // discovery

  const burnham = await Student.create({
    firstName: 'Michael',
    lastName: 'Burnham',
    email: 'mBurnham@starfleet.com',
    imageUrl: 'https://vignette.wikia.nocookie.net/memoryalpha/images/a/aa/Michael_Burnham%2C_2257.jpg/revision/latest?cb=20180220003102&path-prefix=en',
    gpa: 4.0,
  })
  const saru = await Student.create({
    firstName: 'Saru',
    lastName: 'Something',
    email: 'saru@starfleet.com',
    imageUrl: 'https://vignette.wikia.nocookie.net/memoryalpha/images/d/d8/Saru%2C_2257.jpg/revision/latest/scale-to-width-down/700?cb=20180219235950&path-prefix=en',
    gpa: 4.0,
  })
  const tyler = await Student.create({
    firstName: 'Ash',
    lastName: 'Tyler',
    email: 'aTyler@starfleet.com',
    imageUrl: 'https://vignette.wikia.nocookie.net/memoryalpha/images/1/1b/Ash_Tyler%2C_Klingon.jpg/revision/latest/scale-to-width-down/700?cb=20180213211933&path-prefix=en',
    gpa: 3.5,
  })
  const stamets = await Student.create({
    firstName: 'Paul',
    lastName: 'Stamets',
    email: 'pStamets@starfleet.com',
    imageUrl: 'https://vignette.wikia.nocookie.net/memoryalpha/images/e/e3/Paul_Stamets.jpg/revision/latest/scale-to-width-down/700?cb=20180120002337&path-prefix=en',
    gpa: 3.9,
  })
  const tilly = await Student.create({
    firstName: 'Sylvia',
    lastName: 'Tilly',
    email: 'sTilly@starfleet.com',
    imageUrl: 'https://vignette.wikia.nocookie.net/memoryalpha/images/9/97/Sylvia_Tilly.jpg/revision/latest?cb=20181005035351&path-prefix=en',
    gpa: 4.0,
  })

  // CAMPUSES
  const ds9 = await Campus.create({
    name: 'Deep Space Nine',
    imageUrl: 'https://vignette.wikia.nocookie.net/memoryalpha/images/5/54/Deep_space_9.jpg/revision/latest?cb=20070105230453&path-prefix=en',
    address: 'Denorios belt, Bajoran system',
    description: 'Deep Space 9, originally known as Terok Nor, was one of the most historically, politically, and strategically important space stations in the Alpha Quadrant during the latter half of the 24th century. The space station was constructed by the Cardassians in orbit of Bajor during their occupation of the planet. Under Federation administration, following the Cardassian withdrawal, the station was relocated into the Bajoran system\'s Denorios belt. There DS9 became a vital commercial port and defensive outpost due to its location near the mouth of the Bajoran wormhole. It later became a key strategic location during the Dominion War, for both the Dominion and the Federation Alliance.',
  })
  const enterprise = await Campus.create({
    name: 'USS Enterprise NCC-1701',
    imageUrl: 'http://www.startrek.com/uploads/assets/db_articles/9d831a8381f294838bb7eb8bd2e5f884ca377be1.jpg',
    address: 'Earth',
    description: 'Launched in 2245, the original and illustrious starship U.S.S. Enterprise NCC-1701 was built in the San Francisco Yards orbiting Earth. The Constitution-class starship was previously captained by Robert April and Christopher Pike, before coming under the command of Captain James T. Kirk.\nThe ship arguably gained its status as the most famous space-exploration vessel in history due to its historic five-year mission from 2264-2269. During this mission, Enterprise encounted the Romulans for the first time since the Romulan-Earth conflict, engaged the robotic "Planet Killer" vessel, traveled back in time to 20th-Century Earth, and played host to Khan Noonien Singh, a product of late-20th Century genetic engineering who once fought in the Eugenics Wars.',
  })

  const voyager = await Campus.create({
    name: 'USS Voyager',
    imageUrl: 'http://www.startrek.com/legacy_media/images/200303/voy-170-the-u-s-s--voyager-s-h/320x240.jpg',
    address: 'Delta Quadrant',
    description: 'An Intrepid-class vessel capable of holding 200 crew members, the U.S.S. Voyager NCC-74656 is one of the fastest and most powerful starships in Starfleet.\n Although only 345 meters long, about half the size of the U.S.S.Enterprise NCC-1701 - D, Voyager is more technologically advanced than previous Starfleet vessels.Superbly equipped for exploration and research, Voyager has an equally impressive array of defensive and offensive weapons, making it ready for action.\nThe U.S.S.Voyager is the second of only four Intrepid-class starships built by Starfleet to date, launched in 2371 on stardate 48038.5.'
  })

  const discovery = await Campus.create({
    name: 'USS Discovery',
    imageUrl: 'https://vignette.wikia.nocookie.net/memoryalpha/images/3/3b/USS_Discovery.jpg/revision/latest?cb=20181005035736&path-prefix=en',
    address: 'Alpha Quadrant',
    description: 'The USS Discovery (NCC-1031) was a 23rd century Federation Crossfield-class starship operated by Starfleet, under the command of Captain Gabriel Lorca and, later, acting captain Saru. \n Discovery was launched into service from the San Francisco Fleet Yards, Earth. Its motto was "All things can be understood once they are discovered; the point is to discover them." \n By November of 2256, it was still considered impressively new, fresh out of the shipyards, and equipped with some of Starfleet\'s most advanced technologies (in contrast with the relatively old USS Shenzhou).\n As a Crossfield-class starship, Discovery was officially designated a science vessel. It has a crew manifest of approximately 136. The ship\'s facilities were able to accomodate three hundred discrete scientific missions, a Starfleet record at the time. \nBoth Discovery and its sister ship, the USS Glenn, were equipped with an experimental spore drive for field testing. Much research and refinement remained to be done as of late 2256, but if perfected it had the potential to instantly traverse vast galactic distances in the blink of an eye. Discovery only used it in short bursts while attempting to perfect it into a reliable drive system. In contrast, the crew of Glenn took bolder risks to develop it more quickly, resulting in an accident which killed the entire crew and crippled the ship.\n Discovery was built from the ground up to be a test bed for the experimental spore drive, based on the research of Paul Stamets and his colleagues. Stamets had intended his research to pursue purely theoretical knowledge and peaceful applications but, with the outbreak of war, Discovery was rapidly constructed to perfect the military applications of his research. Due to the top secret (and in some cases dangerous) research projects being conducted on Discovery, its internal security was much more rigid and compartmentalized than was regular protocol on Starfleet vessels; breath print identification locks were used to restrict access to different sub-sectors. It also possessed a disproportionately prominent and well-armed security detail, standing guard at various restricted access points throughout the ship. These guards were outfitted with tactical gear bearing a "black star" uniform insignia, unlike the normal silver Starfleet delta insignia. \nSeveral experiments conducted aboard Discovery had the potential to physically endanger the ship itself and its crew, hazardous situations caused by the black ops experiments being activated were addressed by declaring a "black alert" (which was not a standard protocol on Starfleet vessels).',
  })


  // ASSOCIATIONS

  await voyager.addStudent(janeway);
  await voyager.addStudent(paris);
  await voyager.addStudent(torres);
  await voyager.addStudent(kim);
  await voyager.addStudent(tuvok);
  await voyager.addStudent(chakotay);

  await enterprise.addStudent(picard);
  await enterprise.addStudent(riker);
  await enterprise.addStudent(laForge);
  await enterprise.addStudent(data);
  await enterprise.addStudent(worf);
  await enterprise.addStudent(bCrusher);
  await enterprise.addStudent(wCrusher);
  await enterprise.addStudent(troi);

  await ds9.addStudent(sisko);
  await ds9.addStudent(nerys);
  await ds9.addStudent(odo);
  await ds9.addStudent(quark);
  await ds9.addStudent(bashir);
  await ds9.addStudent(dax);
  await ds9.addStudent(oBrien);

  await discovery.addStudent(burnham)
  await discovery.addStudent(saru)
  await discovery.addStudent(tyler)
  await discovery.addStudent(stamets)
  await discovery.addStudent(tilly)



  // seed your database here!

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
