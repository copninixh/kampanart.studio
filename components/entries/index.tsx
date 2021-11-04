import Entry from './entry'

function Entries({ entries }) {
  if (entries) {
    return (
      <div>
        {entries.map((e) => (
          <div key={e.a_id} className="py-2">
            <Entry a_id={e.a_id} a_awards={e.a_awards} a_name={e.a_name} />
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Entries
