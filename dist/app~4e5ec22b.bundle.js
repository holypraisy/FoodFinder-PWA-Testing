(()=>{"use strict";var n,r={936:(n,r,A)=>{A.d(r,{A:()=>o});var e=A(354),t=A.n(e),a=A(314),i=A.n(a)()(t());i.push([n.id,"/* Media Queries for Responsive Design */\n\n/* Small screens (max-width: 649px) */\n@media screen and (max-width: 649px) {\n  html {\n    font-size: 60%;\n  }\n\n  .app-bar {\n    grid-template-columns: auto 1fr auto;\n    padding: 8px 16px;\n  }\n\n  .app-bar .app-bar__menu {\n    display: flex;\n  }\n\n  .app-bar .app-bar__navigation {\n    position: absolute;\n    top: 50px;\n    left: -180px;\n    width: 150px;\n    transition: all 0.3s;\n    padding: 8px;\n    background-color: white;\n    overflow: hidden;\n  }\n\n  .app-bar .app-bar__navigation.open {\n    left: 0;\n  }\n\n  .footer {\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;  \n  }\n\n  .footer-extra {\n    flex-direction: column;\n    align-items: flex-start; \n    gap: 2rem;\n    margin-top: 1rem;\n    width: 100%;\n  }\n\n  .sosmed,\n  .email {\n    margin-top: 1rem;\n    text-align: left;\n  }\n\n  .sosmed h1,\n  .email h1 {\n    font-size: 1.2rem;\n  }\n\n  .sosmed a,\n  .email a {\n    font-size: 1.4rem;\n    margin-left: 1rem;\n    padding: 18px;  /* Add padding for touch target size */\n    box-sizing: border-box; /* Ensure padding is included in width/height */\n    min-width: 44px; /* Minimum width for touch target */\n    min-height: 44px; /* Minimum height for touch target */  \n  }\n\n  .info_container{\n    flex-direction: column;\n  }\n\n  .menus_container {\n    flex-direction: column;\n  }\n}\n\n/* Medium screens (min-width: 650px) */\n@media screen and (min-width: 650px) {\n  html {\n    font-size: 70%;\n  }\n  .app-bar {\n    grid-template-columns: 1fr auto;\n    padding: 8px 32px;\n  }\n\n  .app-bar .app-bar__brand h1 {\n    font-size: 1.5em;\n  }\n\n  .app-bar .app-bar__menu {\n    display: none;\n  }\n\n  .app-bar .app-bar__navigation {\n    position: static;\n    width: 100%;\n  }\n\n  .app-bar .app-bar__navigation ul li {\n    display: inline-block;\n  }\n\n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    width: 120px;\n    text-align: center;\n    margin: 0;\n  }\n\n  .restaurants {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n    margin-top: 32px;\n  }\n\n  .restaurant-item {\n    width: 100%;\n  }\n\n  .footer-extra {\n    flex-direction: column;\n  }\n}\n\n/* Large screens (min-width: 800px) */\n@media screen and (min-width: 800px) {\n  html {\n    font-size: 75%;\n  }\n  .app-bar .app-bar__brand h1 {\n    font-size: 2em;\n  }\n}\n\n/* Extra large screens (min-width: 850px) */\n@media screen and (min-width: 850px) {\n  .restaurants {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .footer-extra {\n    flex-direction: row;\n  }\n\n}\n\n/* Extra extra large screens (min-width: 1200px) */\n@media screen and (min-width: 1200px) {\n  .restaurants {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .footer-extra {\n    flex-direction: row;\n  }\n}\n\n/* Ultra wide screens (min-width: 1600px) */\n@media screen and (min-width: 1600px) {\n  .restaurants {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n\n}\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA,wCAAwC;;AAExC,qCAAqC;AACrC;EACE;IACE,cAAc;EAChB;;EAEA;IACE,oCAAoC;IACpC,iBAAiB;EACnB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,YAAY;IACZ,uBAAuB;IACvB,gBAAgB;EAClB;;EAEA;IACE,OAAO;EACT;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;EACf;;EAEA;IACE,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,gBAAgB;IAChB,WAAW;EACb;;EAEA;;IAEE,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;;IAEE,iBAAiB;EACnB;;EAEA;;IAEE,iBAAiB;IACjB,iBAAiB;IACjB,aAAa,GAAG,sCAAsC;IACtD,sBAAsB,EAAE,+CAA+C;IACvE,eAAe,EAAE,mCAAmC;IACpD,gBAAgB,EAAE,oCAAoC;EACxD;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,sBAAsB;EACxB;AACF;;AAEA,sCAAsC;AACtC;EACE;IACE,cAAc;EAChB;EACA;IACE,+BAA+B;IAC/B,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,SAAS;IACT,gBAAgB;EAClB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,sBAAsB;EACxB;AACF;;AAEA,qCAAqC;AACrC;EACE;IACE,cAAc;EAChB;EACA;IACE,cAAc;EAChB;AACF;;AAEA,2CAA2C;AAC3C;EACE;IACE,qCAAqC;EACvC;EACA;IACE,mBAAmB;EACrB;;AAEF;;AAEA,kDAAkD;AAClD;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA,2CAA2C;AAC3C;EACE;IACE,qCAAqC;EACvC;;;AAGF",sourcesContent:["/* Media Queries for Responsive Design */\r\n\r\n/* Small screens (max-width: 649px) */\r\n@media screen and (max-width: 649px) {\r\n  html {\r\n    font-size: 60%;\r\n  }\r\n\r\n  .app-bar {\r\n    grid-template-columns: auto 1fr auto;\r\n    padding: 8px 16px;\r\n  }\r\n\r\n  .app-bar .app-bar__menu {\r\n    display: flex;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: white;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n  }\r\n\r\n  .footer {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 2rem;  \r\n  }\r\n\r\n  .footer-extra {\r\n    flex-direction: column;\r\n    align-items: flex-start; \r\n    gap: 2rem;\r\n    margin-top: 1rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .sosmed,\r\n  .email {\r\n    margin-top: 1rem;\r\n    text-align: left;\r\n  }\r\n\r\n  .sosmed h1,\r\n  .email h1 {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .sosmed a,\r\n  .email a {\r\n    font-size: 1.4rem;\r\n    margin-left: 1rem;\r\n    padding: 18px;  /* Add padding for touch target size */\r\n    box-sizing: border-box; /* Ensure padding is included in width/height */\r\n    min-width: 44px; /* Minimum width for touch target */\r\n    min-height: 44px; /* Minimum height for touch target */  \r\n  }\r\n\r\n  .info_container{\r\n    flex-direction: column;\r\n  }\r\n\r\n  .menus_container {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n/* Medium screens (min-width: 650px) */\r\n@media screen and (min-width: 650px) {\r\n  html {\r\n    font-size: 70%;\r\n  }\r\n  .app-bar {\r\n    grid-template-columns: 1fr auto;\r\n    padding: 8px 32px;\r\n  }\r\n\r\n  .app-bar .app-bar__brand h1 {\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .app-bar .app-bar__menu {\r\n    display: none;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation {\r\n    position: static;\r\n    width: 100%;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    width: 120px;\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n\r\n  .restaurants {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 16px;\r\n    margin-top: 32px;\r\n  }\r\n\r\n  .restaurant-item {\r\n    width: 100%;\r\n  }\r\n\r\n  .footer-extra {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n/* Large screens (min-width: 800px) */\r\n@media screen and (min-width: 800px) {\r\n  html {\r\n    font-size: 75%;\r\n  }\r\n  .app-bar .app-bar__brand h1 {\r\n    font-size: 2em;\r\n  }\r\n}\r\n\r\n/* Extra large screens (min-width: 850px) */\r\n@media screen and (min-width: 850px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n  .footer-extra {\r\n    flex-direction: row;\r\n  }\r\n\r\n}\r\n\r\n/* Extra extra large screens (min-width: 1200px) */\r\n@media screen and (min-width: 1200px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n\r\n  .footer-extra {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n/* Ultra wide screens (min-width: 1600px) */\r\n@media screen and (min-width: 1600px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(5, 1fr);\r\n  }\r\n\r\n\r\n}\r\n"],sourceRoot:""}]);const o=i},919:(n,r,A)=>{A.d(r,{A:()=>o});var e=A(354),t=A.n(e),a=A(314),i=A.n(a)()(t());i.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n}\n\n\nbody {\n  font-family: 'Poppins', sans-serif;\n  background-color: white;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n\n/* \nskip to content\n*/\n.skip-link {\n  position: absolute;\n  top: -60px;\n  left: 1.5rem;\n  background-color: #362417;\n  color: white;\n  padding: 1.8rem;\n  z-index: 100;\n  font-weight: 400;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n/*\n  AppBar\n*/\n\n.app-bar {\n  padding: 8px 16px;\n  background-color: white;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar__menu {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__menu button {\n  background-color: transparent;\n  border: none;\n  font-size: 18px;\n  cursor: pointer;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.app-bar .app-bar__brand {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n  font-family: 'Playfair Display', serif;\n  color: #362417;\n  font-size: 1.5rem;\n  user-select: none;\n}\n\n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: white;\n  overflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n\n.app-bar .app-bar__navigation ul li a { \n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  margin-bottom: 5px;\n  width: 100%;\n  font-size: 1.2rem;\n  padding: 10px; \n  box-sizing: border-box; \n  min-width: 44px; \n  min-height: 44px; \n  display: inline-block; \n}\n\n.app-bar .app-bar__navigation ul li a:hover {\n  color: #744725;\n}\n\n.app-bar .app-bar__navigation ul li a::after {\n  content: '';\n  display: block;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.5px solid #744725;\n  transform: scaleX(0);\n  transition: transform 0.3s linear;\n}\n\n.app-bar .app-bar__navigation ul li a:hover::after {\n  transform: scaleX(0.2);\n}\n\n\n/*\n  Main Content\n*/\n\nmain {\n  flex: 1;\n}\n\n.content {\n  padding: 2rem;\n  margin: 0 auto;\n  min-height: 100%;\n}\n\n.content .content__heading {\n  font-weight: normal;\n  text-align: center;\n}\n\n/* \nHero Section\n*/\n\n.hero-section {\n  position: relative;\n  text-align: center;\n  background-color: #FFFBFF;\n}\n\n.hero-section img {\n  width: 100%;\n}\n\n\n/*\n  Restaurants\n*/\n\n.restaurants{\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 2rem;\n  margin-top: 32px;\n}\n\n/*\n  Restaurant Item\n*/\n\n.restaurant-item {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);\n  transform: scale(1.0);\n  transition: transform 0.4s ease-in-out;\n}\n\n.restaurant-item:hover{\n  transform: scale(1.03);\n  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1);\n}\n\n.restaurant-item__header {\n  position: relative;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n  height: 250px;\n  object-fit: cover; \n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n\n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n\n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n}\n\n.restaurant-item .restaurant-item__content h3 a {\n  color: #362417;\n  text-decoration: none;\n  padding: 12px;  \n  box-sizing: border-box; \n  min-width: 44px; \n  min-height: 44px;\n  display: inline-block; \n  font-size: 1.5rem;\n}\n\n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; \n  -webkit-box-orient: vertical;\n  padding-left: 12px;\n  font-size: 1.2rem;\n}\n\n/*\n  Restaurant Detail\n*/\n\n.detail_content .content__heading {\n  padding: 2rem 0  0 2rem;\n  text-align: center;\n  font-weight:400;\n}\n\n.restaurant-detail {\n\n  padding: 1rem 2rem 2rem 4rem;\n}\n\n.restaurant__title {\n  font-size: 2rem;\n  border-bottom: 1px solid  #362417 ;\n}\n\n.info_container {\n  display: flex;\n  gap: 2rem;\n}\n\n.restaurant-detail .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  padding: 1rem 1rem 1rem 0rem;\n}\n\n.restaurant-detail .restaurant__info h3 {\n  font-size: 1.5rem;\n  padding-top: .5rem;\n}\n\n.restaurant-detail .restaurant__info h4 {\n  padding-top: .8rem;\n  font-size: 1.1rem;\n}\n\n.restaurant-detail .restaurant__info p {\n  font-size: 1rem;\n}\n\n.restaurant__menus h3 {\n  text-align: center;\n  font-size: 1.5rem;\n  padding-top: 4rem;\n  border-bottom:1px solid #362417 ;\n}\n\n.menus_container {\n  display: flex;\n  justify-content: space-around;\n  padding-top: 2rem;\n}\n\n.restaurant__menus__foods  {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);\n  padding: 3rem 6rem 3rem 6rem;\n\n}\n\n.restaurant__menus__foods h4 {\n  text-align: center;\n  font-size: 1.5rem;\n  padding: 1rem;\n\n}\n\n\n.restaurant__menus__drinks {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);\n  padding: 3rem 6rem 3rem 6rem;\n}\n\n.restaurant__menus__drinks h4 {\n  text-align: center;\n  font-size: 1.5rem;\n  padding: 1rem;\n}\n\n.restaurant__reviews h3 {\n  text-align: center;\n  font-size: 1.5rem;\n  padding-top: 4rem;\n  border-bottom:1px solid #362417 ;\n}\n\n.review {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  overflow: hidden;\n  padding: 2rem;\n}\n\n.review h5 {\n  font-weight: 300;\n  padding-top: 1rem;\n}\n.review p {\n  text-align: right;\n}\n\n.review_container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 2rem;\n  padding: 1rem;\n\n}\n\n/* \nFavorite Button \n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n\n\n/*\n  Footer\n*/\n\n.footer {\n  color: #362417;\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 3rem;\n  border-top: 1px solid #ccc;\n}\n\n.logo h1 {\n  font-family: 'Playfair Display', serif;\n}\n\n.logo span {\n  font-family: 'Playfair Display', serif;\n  color: #362417;\n}\n\n.footer-extra {\n  display: flex;\n  flex-direction: row;\n  gap: 6rem;\n}\n\n.sosmed {\n  margin-top: 2rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.sosmed h1 {\n  color: #362417;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.sosmed a,\n.email a {\n  font-size: 1.8rem;\n  color:#362417;\n  text-decoration: none;\n  margin-right: 3rem;\n  cursor: pointer;\n  padding: 14px;  \n  box-sizing: border-box; \n  min-width: 44px; \n  min-height: 44px; \n  display: inline-block; \n}\n\n\n\n.sosmed a:hover {\n  color: rgb(0, 0, 0);\n}\n\n.email {\n  margin-top: 2rem;\n  padding-right: 2rem;\n  \n}\n\n.email h1 {\n  color:#362417;\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.email a {\n  color: #362417;\n  font-size: 1.2rem;\n}\n\nfooter {\n  padding: 16px;\n}\n\nfooter p {\n  padding: 1rem;\n  background-color: #362417;\n  text-align: center;\n  color: white;\n}\n\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: white;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n\r\n/* \r\nskip to content\r\n*/\r\n.skip-link {\r\n  position: absolute;\r\n  top: -60px;\r\n  left: 1.5rem;\r\n  background-color: #362417;\r\n  color: white;\r\n  padding: 1.8rem;\r\n  z-index: 100;\r\n  font-weight: 400;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n}\r\n\r\n/*\r\n  AppBar\r\n*/\r\n\r\n.app-bar {\r\n  padding: 8px 16px;\r\n  background-color: white;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  width: 44px;\r\n  height: 44px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n  font-family: 'Playfair Display', serif;\r\n  color: #362417;\r\n  font-size: 1.5rem;\r\n  user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: -180px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 8px;\r\n  background-color: white;\r\n  overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n  left: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a { \r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: black;\r\n  margin-bottom: 5px;\r\n  width: 100%;\r\n  font-size: 1.2rem;\r\n  padding: 10px; \r\n  box-sizing: border-box; \r\n  min-width: 44px; \r\n  min-height: 44px; \r\n  display: inline-block; \r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a:hover {\r\n  color: #744725;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a::after {\r\n  content: '';\r\n  display: block;\r\n  padding-bottom: 0.5rem;\r\n  border-bottom: 0.5px solid #744725;\r\n  transform: scaleX(0);\r\n  transition: transform 0.3s linear;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a:hover::after {\r\n  transform: scaleX(0.2);\r\n}\r\n\r\n\r\n/*\r\n  Main Content\r\n*/\r\n\r\nmain {\r\n  flex: 1;\r\n}\r\n\r\n.content {\r\n  padding: 2rem;\r\n  margin: 0 auto;\r\n  min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n  font-weight: normal;\r\n  text-align: center;\r\n}\r\n\r\n/* \r\nHero Section\r\n*/\r\n\r\n.hero-section {\r\n  position: relative;\r\n  text-align: center;\r\n  background-color: #FFFBFF;\r\n}\r\n\r\n.hero-section img {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/*\r\n  Restaurants\r\n*/\r\n\r\n.restaurants{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\r\n  gap: 2rem;\r\n  margin-top: 32px;\r\n}\r\n\r\n/*\r\n  Restaurant Item\r\n*/\r\n\r\n.restaurant-item {\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);\r\n  transform: scale(1.0);\r\n  transition: transform 0.4s ease-in-out;\r\n}\r\n\r\n.restaurant-item:hover{\r\n  transform: scale(1.03);\r\n  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.restaurant-item__header {\r\n  position: relative;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\r\n  width: 100%;\r\n  height: 250px;\r\n  object-fit: cover; \r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\r\n  position: absolute;\r\n  padding: 8px;\r\n  bottom: 20px;\r\n  left: 0;\r\n  display: inline-block;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\r\n  margin-left: 10px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content {\r\n  padding: 16px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 {\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 a {\r\n  color: #362417;\r\n  text-decoration: none;\r\n  padding: 12px;  \r\n  box-sizing: border-box; \r\n  min-width: 44px; \r\n  min-height: 44px;\r\n  display: inline-block; \r\n  font-size: 1.5rem;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4; \r\n  -webkit-box-orient: vertical;\r\n  padding-left: 12px;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/*\r\n  Restaurant Detail\r\n*/\r\n\r\n.detail_content .content__heading {\r\n  padding: 2rem 0  0 2rem;\r\n  text-align: center;\r\n  font-weight:400;\r\n}\r\n\r\n.restaurant-detail {\r\n\r\n  padding: 1rem 2rem 2rem 4rem;\r\n}\r\n\r\n.restaurant__title {\r\n  font-size: 2rem;\r\n  border-bottom: 1px solid  #362417 ;\r\n}\r\n\r\n.info_container {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.restaurant-detail .restaurant__poster {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  padding: 1rem 1rem 1rem 0rem;\r\n}\r\n\r\n.restaurant-detail .restaurant__info h3 {\r\n  font-size: 1.5rem;\r\n  padding-top: .5rem;\r\n}\r\n\r\n.restaurant-detail .restaurant__info h4 {\r\n  padding-top: .8rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.restaurant-detail .restaurant__info p {\r\n  font-size: 1rem;\r\n}\r\n\r\n.restaurant__menus h3 {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  padding-top: 4rem;\r\n  border-bottom:1px solid #362417 ;\r\n}\r\n\r\n.menus_container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding-top: 2rem;\r\n}\r\n\r\n.restaurant__menus__foods  {\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);\r\n  padding: 3rem 6rem 3rem 6rem;\r\n\r\n}\r\n\r\n.restaurant__menus__foods h4 {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  padding: 1rem;\r\n\r\n}\r\n\r\n\r\n.restaurant__menus__drinks {\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);\r\n  padding: 3rem 6rem 3rem 6rem;\r\n}\r\n\r\n.restaurant__menus__drinks h4 {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.restaurant__reviews h3 {\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  padding-top: 4rem;\r\n  border-bottom:1px solid #362417 ;\r\n}\r\n\r\n.review {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  padding: 2rem;\r\n}\r\n\r\n.review h5 {\r\n  font-weight: 300;\r\n  padding-top: 1rem;\r\n}\r\n.review p {\r\n  text-align: right;\r\n}\r\n\r\n.review_container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n  gap: 2rem;\r\n  padding: 1rem;\r\n\r\n}\r\n\r\n/* \r\nFavorite Button \r\n*/\r\n\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  \r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  \r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/*\r\n  Footer\r\n*/\r\n\r\n.footer {\r\n  color: #362417;\r\n  background-color: white;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 3rem;\r\n  border-top: 1px solid #ccc;\r\n}\r\n\r\n.logo h1 {\r\n  font-family: 'Playfair Display', serif;\r\n}\r\n\r\n.logo span {\r\n  font-family: 'Playfair Display', serif;\r\n  color: #362417;\r\n}\r\n\r\n.footer-extra {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 6rem;\r\n}\r\n\r\n.sosmed {\r\n  margin-top: 2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.sosmed h1 {\r\n  color: #362417;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.sosmed a,\r\n.email a {\r\n  font-size: 1.8rem;\r\n  color:#362417;\r\n  text-decoration: none;\r\n  margin-right: 3rem;\r\n  cursor: pointer;\r\n  padding: 14px;  \r\n  box-sizing: border-box; \r\n  min-width: 44px; \r\n  min-height: 44px; \r\n  display: inline-block; \r\n}\r\n\r\n\r\n\r\n.sosmed a:hover {\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\n.email {\r\n  margin-top: 2rem;\r\n  padding-right: 2rem;\r\n  \r\n}\r\n\r\n.email h1 {\r\n  color:#362417;\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.email a {\r\n  color: #362417;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nfooter {\r\n  padding: 16px;\r\n}\r\n\r\nfooter p {\r\n  padding: 1rem;\r\n  background-color: #362417;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n"],sourceRoot:""}]);const o=i},47:(n,r,A)=>{var e=A(72),t=A.n(e),a=A(825),i=A.n(a),o=A(659),p=A.n(o),s=A(56),d=A.n(s),l=A(540),E=A.n(l),C=A(113),m=A.n(C),B=A(936),c={};c.styleTagTransform=m(),c.setAttributes=d(),c.insert=p().bind(null,"head"),c.domAPI=i(),c.insertStyleElement=E(),t()(B.A,c),B.A&&B.A.locals&&B.A.locals},966:(n,r,A)=>{var e=A(72),t=A.n(e),a=A(825),i=A.n(a),o=A(659),p=A.n(o),s=A(56),d=A.n(s),l=A(540),E=A.n(l),C=A(113),m=A.n(C),B=A(919),c={};c.styleTagTransform=m(),c.setAttributes=d(),c.insert=p().bind(null,"head"),c.domAPI=i(),c.insertStyleElement=E(),t()(B.A,c),B.A&&B.A.locals&&B.A.locals}},A={};function e(n){var t=A[n];if(void 0!==t)return t.exports;var a=A[n]={id:n,exports:{}};return r[n](a,a.exports,e),a.exports}e.m=r,n=[],e.O=(r,A,t,a)=>{if(!A){var i=1/0;for(d=0;d<n.length;d++){for(var[A,t,a]=n[d],o=!0,p=0;p<A.length;p++)(!1&a||i>=a)&&Object.keys(e.O).every((n=>e.O[n](A[p])))?A.splice(p--,1):(o=!1,a<i&&(i=a));if(o){n.splice(d--,1);var s=t();void 0!==s&&(r=s)}}return r}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[A,t,a]},e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var A in r)e.o(r,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:r[A]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n={182:0};e.O.j=r=>0===n[r];var r=(r,A)=>{var t,a,[i,o,p]=A,s=0;if(i.some((r=>0!==n[r]))){for(t in o)e.o(o,t)&&(e.m[t]=o[t]);if(p)var d=p(e)}for(r&&r(A);s<i.length;s++)a=i[s],e.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return e.O(d)},A=self.webpackChunkrestaurant_app=self.webpackChunkrestaurant_app||[];A.forEach(r.bind(null,0)),A.push=r.bind(null,A.push.bind(A))})(),e.nc=void 0;var t=e.O(void 0,[311,608,738,74,720],(()=>e(956)));t=e.O(t)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map