window.addEventListener('load', () => {
    const form = document.querySelector("#add-activity-form");
    const input = document.querySelector("#add-activity-input");
    const list_element = document.querySelector("tasks");

    form.addEventListener('submit', (action) => {
        action.preventDefault();

        const input_activity = input.value;

        if (!input_activity) {
            alert("Please write down a task/activity.")
        }
    })
})
