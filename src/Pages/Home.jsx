export const Home = () =>
{
    return (
        <section className="Section">
            <article className="Themes">
                <table className="ThemesList">
                    <thead>
                        <tr>
                            <th>
                                <div className="SectionHeader">
                                    <h1 className="SectionTitle">Темы</h1>
                                    <nav className="SectionNav">
                                        <ul className="SectionNavList">
                                            <li className="SectionNavItem">
                                                <a className="SectionNavLink">Избранное</a>
                                            </li>
                                            <li className="SectionNavItem">
                                                <a className="SectionNavLink">Завершённые</a>
                                            </li>
                                            <li className="SectionNavItem">
                                                <a className="SectionNavLink">Новая тема</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </th>
                            <th>Автор</th>
                            <th>Дата последнего изменения</th>
                            <th>
                                <a>❤</a>
                                &nbsp;|&nbsp;
                                <a>🞩</a>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <h5>
                                    <a>Подготовка и настройка проекта</a>
                                </h5>
                                <p>Обратите внимание: для разработки клиента я буду использовать React, но вы можете использовать свой любимый JS-фреймворк - функционал, связанный с Supabase, будет что называется framework agnostic</p>
                            </td>
                            <td><a>naysy</a></td>
                            <td>23 июля 2022 12:33</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>
                                    <a>Обработка изменения данных в режиме реального времени</a>
                                </h5>
                                <p>Вы могли заметить, что на страницах для регистрации и авторизации пользователя мы обновляем состояние загрузки только один раз (setLoading(true)). Разве это не приведет к тому, что все время будет отображаться индикатор загрузки? Именно так. Давайте это исправим.</p>
                            </td>
                            <td><a>naysy</a></td>
                            <td>24 августа 2022 12:33</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5>
                                    <a>Проверка работоспособности приложения</a>
                                </h5>
                                <p>Определим функцию для наполнения базы фиктивными данными. В директории src создаем файл seedDb.js следующего содержания</p>
                            </td>
                            <td><a>naysy</a></td>
                            <td>1 сентября 2022 12:33</td>
                            <td>
                                <input type="checkbox" />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Постраничная навигация</th>
                            <th>2</th>
                            <th>23.07 - 1.09</th>
                            <th>Выбрано: <br />3 темы</th>
                        </tr>
                    </tfoot>
                </table>
            </article>
        </section>
    )
}
