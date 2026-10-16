/**
 * What a fresh clone shows before it is connected to a library. Not an error
 * page: building and running with no environment is how CI checks this site.
 */
export function SetupNotice() {
  return (
    <section className="container setup">
      <h1>Connect a content library</h1>
      <p>
        This site renders every page, menu and setting from a Forumulate content library. Set{' '}
        <code>FORUMULATE_LIBRARY_ID</code> and <code>FORUMULATE_DELIVERY_KEY</code> (see <code>.env.example</code>), or
        run <code>npm run seed</code> against a test organization to create one filled with sample content.
      </p>
    </section>
  );
}
