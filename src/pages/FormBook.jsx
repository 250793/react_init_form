import React, { useRef } from 'react'
export default function FormBook () {

    let refAutor = useRef()
    let refForm = useRef()
    const submit = e => {
        console.log('form', e.target)
        e.preventDefault();

        const form = e.target

        const data = new FormData(e.target)
        const json = Object.fromEntries(data.entries());

        console.log(json)

    }

    return (
        <div>
            <form ref={refForm} onSubmit={submit} >
                <label>Autor:</label>
                <input ref={refAutor} type="text" name="autor" id="autor" />

                <label>Titulo:</label>
                <input type="text" name="titulo" id="titulo" />

                <label>Ano:</label>
                <input type="text" name="ano" id="ano" />

                <button type="submit">Enviar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    )
}
