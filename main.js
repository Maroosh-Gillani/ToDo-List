window.addEventListener('load', () => {
    const form = document.querySelector("#add-activity-form");
    const input = document.querySelector("#add-activity-input");
    const list_element = document.querySelector("#tasks");

    form.addEventListener('submit', (action) => {
        action.preventDefault();

        const input_activity = input.value;

        if (!input_activity) {
            alert("Please write down a task/activity.");
            return;
        }

        const activity_element = document.createElement("div");
        activity_element.classList.add("task");

        const activity_content_element = document.createElement("div");
        activity_content_element.classList.add("content");

        activity_element.appendChild(activity_content_element);

        const activity_input_element = document.createElement("input");
        activity_input_element.classList.add("text");
        activity_input_element.type = "text";
        activity_input_element.value = input_activity;
        activity_input_element.setAttribute("readonly","readonly");

        activity_content_element.appendChild(activity_input_element);

        const activity_actions_element = document.createElement("div");
        activity_actions_element.classList.add("actions");

        const activity_edit_element = document.createElement("button");
        activity_edit_element.classList.add("edit");
        activity_edit_element.innerHTML = "Edit";

        const activity_remove_element = document.createElement("button");
        activity_remove_element.classList.add("remove");
        activity_remove_element.innerHTML = "Remove";

        activity_actions_element.appendChild(activity_edit_element);
        activity_actions_element.appendChild(activity_remove_element);
        
        activity_element.appendChild(activity_actions_element);

        list_element.appendChild(activity_element);

        input.value = "";

        activity_edit_element.addEventListener('click', () => {
            if (activity_edit_element.innerText == "Edit") {
                activity_input_element.removeAttribute("readonly");
                activity_input_element.focus();
                activity_edit_element.innerText = "Done";
            } else {
                activity_input_element.setAttribute("readonly", "readonly");
                activity_edit_element.innerText = "Edit";
            }
        });

        activity_remove_element.addEventListener('click', () => {
            list_element.removeChild(activity_element);
        });
    });
});
