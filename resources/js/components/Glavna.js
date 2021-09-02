
import React, {Component} from 'react';
import './css/Glavna.css'
import Films from './slike/Films.jpg'
import Drama from './slike/Drama.jpg'
import Naucna from './slike/Naucna.png'
import Commedy from './slike/Commedy.jpg'
import Horor from './slike/Horor.jpg'
import {Modal,Button,CardColumns,Card} from 'react-bootstrap'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Drama
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Opis</h4>
        <p>
        Drama je žanr u književnosti, koji je nastao u petom veku pre nove ere, za vreme antičke Grčke i koji se i danas razvija.
        Drama je književno delo, koje, uglavnom, služi javnom izvođenju u pozorištu. U toku 18. i 19. veka opera je nastala kao kombinacija drame, poezije i muzike.

        Osnovne podvrste drame su: tragedija, komedija i drama u užem smislu, koje se prvo pojavljuju nekoliko vekova pre naše ere. 
        Starogrčka drama je prema legendama nastala za vreme verskog festivala, kada se jedan pevač odvojio od zbora i počeo pevati sam. 
        Grčka tragedija se u glavnom bavila poznatim mitološkim temama. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Naucna-fantastika
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Opis</h4>
        <p>
        Naučna fantastika je književni žanr u kojem deo ili cela priča zavisi od uticaja nauke, bilo stvarnog ili zamišljenog, 
        da stvori uslove ili događaje koji se u stvarnosti još nisu desili (a koji nikada i ne moraju da se dese).
        Naučna fantastika je umetnički žanr koji obrađuje razne opšte ljudske situacije smeštene u zamišljenu buduću realnost koja se temelji
         na danas znanim naučnim podacima za razliku od žanra tzv. „čiste” ili fantastike u širem smislu koja se ne temelji na nauci. 
         Granice žanra nisu jasno definisane kao ni granice podžanrova. Mnoga naučnofantastična dela sadrže obeležja drugih umetničkih žanrova,
          poput kriminalističkih romana, romana strave i užasa, istorijskih romana i fantastike. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Komedija
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Opis</h4>
        <p>
        Komedija je filmski žanr čiji je osnovni zadatak da izazove smijeh kod publike. Ona se bavi smiješnim ljudskim karakterima, 
        osobinama i situacijama, i usmjerena je na ismijavanje čovjekovih mana i slabosti, kao i negativnih pojava u društvu i životu. 
        Osnovni elementi filmske komedije su komični karakteri (likovi), komične situacije i komični dijalog. Prožeta je i elementima ironičnog,
         poetskog, humorističkog, satiričnog, grotesknog, tragikomičnog, crnohumornog itd. Razvila se iz nijeme burleske u veliki broj podvrsta, 
         preko apsurdne komedije, sentimentalne komedije sa muzikom i plesom, porodične komedije, muzičke komedije, komedije „bijelih telefona”, 
         ležerne građanske komedije, ljubavne komedije itd. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Horor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Opis</h4>
        <p>
        Horor je žanr fantastike koji je namenjen da uplaši ili zgrozi svoje čitaoce izazivajući osećaje strave i užasa. 
        Istoričar književnosti J. A. Kadon opisao je horor priču kao „delo fikcije u prozi promenljive dužine ... što šokira,
         ili čak plaši čitaoca, ili možda izaziva osećaj odbojnosti ili odvratnosti”.Stvara jezivu i zastrašujuću atmosferu.
          Često se centralna pretnja dela horor fikcije može tumačiti kao metafora za veće strahove društva.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zatvori</Button>
      </Modal.Footer>
    </Modal>
  );
}




function Glavna(){
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  
  return(
    <div>
             <div className="row mt-5">

             </div>
             <div id="jumbo mt-5">
                 <div className="jumbotron" style={{backgroundImage:`url(${Films})`,height:'cover'}}>
                  </div>
             <div className="row mb-4">
                <div className="col">
                     <img src={Drama} onClick={() => setModalShow(true)} />
                     <p>DRAMA</p>
                </div>
                <div className="col">
                    <img src={Naucna} onClick={() => setModalShow1(true)} />
                    <p>NAUCNA FANTASTIKA</p>
                 </div>
                 <div className="col">
                     <img src={Commedy} onClick={() => setModalShow2(true)} />
                     <p>KOMEDIJA</p>
                 </div>
                 <div className="col">
                     <img src={Horor} onClick={() => setModalShow3(true)} />
                     <p>HOROR</p>
                 </div>                
             </div>

        <CardColumns className="mb-5">
        <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Bioskop je vezan za ono što je u okviru platna, ali i za ono što je izvan njega.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                Martin Skorseze
                </small>
              </footer>
            </blockquote>
          </Card>
        <Card className="text-right" >
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Bioskop je najlepša prevara na svetu.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                Žan-Lik Godar
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Bitan element svake umetnosti je rizik. Ako ne rizikuješ kako ćeš onda napraviti nešto stvarno prelepo što nije viđeno ranije.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                Fransis Ford Kopola
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-right"  >
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Sve što sam naučila naučila sam iz filmova. <strong>"</strong>

              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Odri Hepbern
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card className="text-right">
            <blockquote className="blockquote mb-0 card-body">
              <p>
              <strong>"</strong>Sve životne zagonetke su rešene u filmovima.<strong>"</strong>
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Stieve Martin
                </small>
              </footer>
            </blockquote>
          </Card>
          
        </CardColumns>



            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <MyVerticallyCenteredModal1
              show={modalShow1}
              onHide={() => setModalShow1(false)}
            />
            <MyVerticallyCenteredModal2
              show={modalShow2}
              onHide={() => setModalShow2(false)}
            />
            <MyVerticallyCenteredModal3
              show={modalShow3}
              onHide={() => setModalShow3(false)}
            />
            
           </div>
    </div>
  );
}

export default Glavna;