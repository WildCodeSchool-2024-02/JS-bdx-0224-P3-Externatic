import FileUpload from '../components/atomic/FileUpload';


function DashboardCandidate() {
  return (
    <main>
      <article>
        <header className="mt-10">
          {/* <h1>
            {`${user.lastname}`}
            {`${user.firstname}`}
          </h1>
          <p>Mail: {`${user.mail}`}</p>
          <p>Tel: {`${user.phone}`}</p>
          <p>Localisation: {`${user.localisation}`}</p> */}
        </header>
<FileUpload/>
      </article>
    </main>
  );
}




export default DashboardCandidate;
