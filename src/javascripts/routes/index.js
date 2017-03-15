import express from 'express';
import request from 'request';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, createRoutes} from 'react-router';

import appRouter from 'client/router';

const routes = createRoutes(appRouter());

class DataProvider extends Component {
  getChildContext() {
    return {data: this.props.data};
  }
  render() {
    return <RouterContext {...this.props}/>;
  }
}
DataProvider.propTypes = {
  data: React.PropTypes.object
};
DataProvider.childContextTypes = {
  data: React.PropTypes.object
};

/*eslint-disable*/
const router = express.Router();
/*eslint-enable*/

/* GET home page. */
router.get('/', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});

router.get('/home', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});
router.get('/list', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      request('http://localhost:3000/api/users', (error, response, body) => {
        const data = {items: JSON.parse(body)};
        const content = renderToString(<DataProvider {...renderProps} data={data}/>);
        res.render('index', {title: 'Express', data, content});
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
});

// API
router.get('/api/*', (req, res, next) => {
  res.contentType('json');
  next();
});

router.get('/api/users', (req, res) => {
  res.send('[{"id":1,"name":"LeanneGraham","username":"Bret","email":"Sincere@april.biz","address":{"street":"KulasLight","suite":"Apt.556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layeredclient-serverneural-net","bs":"harnessreal-timee-markets"}},{"id":2,"name":"ErvinHowell","username":"Antonette","email":"Shanna@melissa.tv","address":{"street":"VictorPlains","suite":"Suite879","city":"Wisokyburgh","zipcode":"90566-7771","geo":{"lat":"-43.9509","lng":"-34.4618"}},"phone":"010-692-6593x09125","website":"anastasia.net","company":{"name":"Deckow-Crist","catchPhrase":"Proactivedidacticcontingency","bs":"synergizescalablesupply-chains"}},{"id":3,"name":"ClementineBauch","username":"Samantha","email":"Nathan@yesenia.net","address":{"street":"DouglasExtension","suite":"Suite847","city":"McKenziehaven","zipcode":"59590-4157","geo":{"lat":"-68.6102","lng":"-47.0653"}},"phone":"1-463-123-4447","website":"ramiro.info","company":{"name":"Romaguera-Jacobson","catchPhrase":"Facetofacebifurcatedinterface","bs":"e-enablestrategicapplications"}},{"id":4,"name":"PatriciaLebsack","username":"Karianne","email":"Julianne.OConner@kory.org","address":{"street":"HoegerMall","suite":"Apt.692","city":"SouthElvis","zipcode":"53919-4257","geo":{"lat":"29.4572","lng":"-164.2990"}},"phone":"493-170-9623x156","website":"kale.biz","company":{"name":"Robel-Corkery","catchPhrase":"Multi-tieredzerotoleranceproductivity","bs":"transitioncutting-edgewebservices"}},{"id":5,"name":"ChelseyDietrich","username":"Kamren","email":"Lucio_Hettinger@annie.ca","address":{"street":"SkilesWalks","suite":"Suite351","city":"Roscoeview","zipcode":"33263","geo":{"lat":"-31.8129","lng":"62.5342"}},"phone":"(254)954-1289","website":"demarco.info","company":{"name":"KeeblerLLC","catchPhrase":"User-centricfault-tolerantsolution","bs":"revolutionizeend-to-endsystems"}},{"id":6,"name":"Mrs.DennisSchulist","username":"Leopoldo_Corkery","email":"Karley_Dach@jasper.info","address":{"street":"NorbertoCrossing","suite":"Apt.950","city":"SouthChristy","zipcode":"23505-1337","geo":{"lat":"-71.4197","lng":"71.7478"}},"phone":"1-477-935-8478x6430","website":"ola.org","company":{"name":"Considine-Lockman","catchPhrase":"Synchronisedbottom-lineinterface","bs":"e-enableinnovativeapplications"}},{"id":7,"name":"KurtisWeissnat","username":"Elwyn.Skiles","email":"Telly.Hoeger@billy.biz","address":{"street":"RexTrail","suite":"Suite280","city":"Howemouth","zipcode":"58804-1099","geo":{"lat":"24.8918","lng":"21.8984"}},"phone":"210.067.6132","website":"elvis.io","company":{"name":"JohnsGroup","catchPhrase":"Configurablemultimediatask-force","bs":"generateenterprisee-tailers"}},{"id":8,"name":"NicholasRunolfsdottirV","username":"Maxime_Nienow","email":"Sherwood@rosamond.me","address":{"street":"EllsworthSummit","suite":"Suite729","city":"Aliyaview","zipcode":"45169","geo":{"lat":"-14.3990","lng":"-120.7677"}},"phone":"586.493.6943x140","website":"jacynthe.com","company":{"name":"AbernathyGroup","catchPhrase":"Implementedsecondaryconcept","bs":"e-enableextensiblee-tailers"}},{"id":9,"name":"GlennaReichert","username":"Delphine","email":"Chaim_McDermott@dana.io","address":{"street":"DaynaPark","suite":"Suite449","city":"Bartholomebury","zipcode":"76495-3109","geo":{"lat":"24.6463","lng":"-168.8889"}},"phone":"(775)976-6794x41206","website":"conrad.com","company":{"name":"YostandSons","catchPhrase":"Switchablecontextually-basedproject","bs":"aggregatereal-timetechnologies"}},{"id":10,"name":"ClementinaDuBuque","username":"Moriah.Stanton","email":"Rey.Padberg@karina.biz","address":{"street":"KattieTurnpike","suite":"Suite198","city":"Lebsackbury","zipcode":"31428-2261","geo":{"lat":"-38.2386","lng":"57.2232"}},"phone":"024-648-3804","website":"ambrose.net","company":{"name":"HoegerLLC","catchPhrase":"Centralizedempoweringtask-force","bs":"targetend-to-endmodels"}}]');
});

module.exports = router;
