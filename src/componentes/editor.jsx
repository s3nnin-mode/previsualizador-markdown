import React from "react";
import '../stylesheet/editor.css';
import { connect } from "react-redux";
import { mostrarVistaPrevia, actualizarEstadoEditor } from "../redux/slices/markdown";

class Entrada extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        expandido: false
      }
      this.handleChange = this.handleChange.bind(this)
    }

    ajustarAlturaEditor() {
      this.setState(prevState => ({
        expandido: !prevState.expandido
      }))

      this.props.actualizarEstadoDelEditor();
    }

    handleChange(e) {
      this.props.actualizarVistaPrevia(e.target.value)
    }

    render() {
        return (
          <div className={ this.props.markdown.vistaPreviaExpandida ? 'ocultar-editor' : 'contenedor-textarea'}>
            <div className='icons'>
              <div className="d-flex">
              <i className="bi bi-emoji-smile"></i>
              <p className="texto-editor">Editor</p>
              </div>
              <i className={ `${this.state.expandido ? 'bi bi-arrows-angle-contract' : 'bi bi-arrows-fullscreen'} btn-interaccion`} onClick={() => this.ajustarAlturaEditor()}></i>
            </div>
            <textarea 
            className={ this.state.expandido ? 'textarea-grande' : null } 
            id="editor" 
            onChange={(e) => this.handleChange(e)} 
            value={this.props.markdown.value}
            placeholder="sdbsj"/>
          </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actualizarVistaPrevia: (value) => {
      dispatch(mostrarVistaPrevia(value))
    },
    actualizarEstadoDelEditor: () => {
      dispatch(actualizarEstadoEditor())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    markdown: state.markdown
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Entrada)