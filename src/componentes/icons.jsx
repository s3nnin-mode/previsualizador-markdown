import React from "react";
import styles from '../stylesheet/icons.module.css'

class Icons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expandido: false }
    }

    render() {
        return (
            <div className={styles.icons}>
                <div className="d-flex">
                  <i className="bi bi-emoji-smile"></i>
                  <p className="texto-vista-previa">Vista previa</p>
                </div>
                <i className={ `${this.state.expandido ? 'bi bi-arrows-angle-contract' : 'bi bi-arrows-fullscreen'} btn-interaccion`} onClick={() => this.ajustarAlturaEditor()}></i>
            </div>
        )
    }
}

export default Icons;