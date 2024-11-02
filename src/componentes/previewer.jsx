import React from "react";
import styles from '../stylesheet/previewer.module.css';
import { connect } from "react-redux";
import { actualizarEstadoVistaPrevia } from "../redux/slices/markdown";

import { marked } from 'marked'

class Previewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expandido: false };
        marked.setOptions({
          breaks: true, 
          gfm: true,   
        });
    }

    ajustarAlturaEditor() {
      this.setState(prevState => ({
        expandido: !prevState.expandido
      }));

      this.props.actualizarEstadoDeVistaPrevia();
    }

    render() {
        return (
            <div className={ this.props.markdown.editorExpandido ? styles['ocultar-vista-previa'] : styles['contenedor-vista-previa']}>
              <div className={styles.icons}>
                <div className="d-flex">
                  <i className="bi bi-emoji-smile"></i>
                  <p className={styles['texto-vista-previa']}>Vista previa</p>
                </div>
                <i className={ `${this.state.expandido ? 'bi bi-arrows-angle-contract' : 'bi bi-arrows-fullscreen'} ${styles['btn-interaccion']}`} onClick={() => this.ajustarAlturaEditor()}></i>
              </div>

              <div
              id="preview"
              className={`${this.state.expandido ? styles['expandir-vista-previa']  :  styles['contraer-vista-previa'] } ${styles['contenedor-renderizador']}`}
              dangerouslySetInnerHTML={{__html: marked(this.props.markdown.value)}}
              >
              </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    markdown: state.markdown
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actualizarEstadoDeVistaPrevia: () => {
      dispatch(actualizarEstadoVistaPrevia())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Previewer);