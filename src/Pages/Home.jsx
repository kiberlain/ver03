import testData from "../testdata";

export const Home = ({ themes }) => {
  return (
    <>
      <ol className="ThemesList">
        {testData.map((post) => (
          <li className="ThemesListItem" key={post.id}>
            <article className="Task">
              <header className="TaskHeader">
                <div className="TaskMeta Flex">
                  <a className="TaskFolder">{post.folder}</a>
                  <a className="TaskAuthor">{post.user_id}</a>
                  <time>{post.created_at}</time>
                </div>
                <h2 className="TaskTitle">
                  <a className="TaskLink">{post.title}</a>
                </h2>
              </header>
              <p>{post.description}</p>
              <footer className="TaskFooter">
                <small>12 просмотров | 4 комментария</small>
              </footer>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
};
