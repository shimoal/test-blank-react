import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
    <div className="flex flex-col items-center">
        <div className='flex'>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo m-4 h-[90px]" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react m-4 h-[90px]" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold py-4">Vite + React</h1>
      </div>

      <h2>Sample table from DaisyUI:</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>

    </>
  )
}

export default App
