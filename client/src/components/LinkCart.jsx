import React from 'react'

export const LinkCart = ({ link }) => {
    return (
        <>
            <h2>Ссылка</h2>
            <h5>Ваша ссылка:
                 <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a>
            </h5>
            <h5>Откуда:
                 <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a>
            </h5>
            <h5>Количество кликов по ссылке:
                 <strong>{link.clicks}</strong>
            </h5>
            <h5>Дата создания:
                 <strong>{new Date(link.date).toLocaleDateString()}</strong>
            </h5>
        </>
    )
}
