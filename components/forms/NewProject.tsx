export default function NewProject() {
    return (
        <>
            <form action="something" className="flex flex-col gap-6 p-4 m-4 border-2 rounded-lg">
                <fieldset className="p-4 border-2 rounded-md">
                    <legend>Project Info:</legend>
                    <label htmlFor="p-title">Project Title:</label>
                    <input id="p-title" name="p-title" type="text" placeholder="Project Name" required></input>
                    <label htmlFor="p-description">Project Description:</label>
                    <input type="text" name="p-description" id="p-description" placeholder="This project is for..." required/>
                </fieldset>
                <fieldset className="p-4 border-2 rounded-md">
                    <legend>Technologies Used:</legend>
                    <input type="text" name="technologies" id="technologies" placeholder="Ex: JavaScript" required/>
                    <button>ADD</button>
                    <div id="tech-used"></div>
                </fieldset>
                <fieldset className="p-4 border-2 rounded-md">
                    <legend>Project Link:</legend>
                    <input type="text" name="link" id="link" placeholder="URL of the project"/>
                </fieldset>
            </form>
        </>
    )
}