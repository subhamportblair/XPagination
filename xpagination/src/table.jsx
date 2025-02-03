
const Table = ({ data = [] }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table
        style={{
          padding: "2px",
          border: "solid 1px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, name, email, role }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
