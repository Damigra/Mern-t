import React, { useState, useContext, useEffect } from 'react'
import { useHttp } from './../hooks/http.hook';
import { AuthContext } from './../context/AuthContext';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
const history =  useHistory()
    const auth = useContext(AuthContext)
    const { request } = useHttp()
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    
    const pressHandler = async event => {
        if (event.key === 'Enter') {
          try {
            const data = await request('/api/link/generate', 'POST', {from: link}, {
              Authorization: `Bearer ${auth.token}`
            })
            history.push(`/detail/${data.link._id}`)
          } catch (e) {}
        }
      }
    //Чтобы интупы были по умолчнию активны
    return (
        <div className="row text-center">
            <div className="col-c4 offset-2" style={{ paddingTop: '2em' }}>
                <div className="input-field">
                    <input
                        placeholder="Вставьте ссылку"
                        id="link"
                        type="text"
                        name="email"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label forHtml="link">Введите ссылку</label>
                </div>
            </div>
        </div>
    )
}
