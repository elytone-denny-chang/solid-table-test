import { Component, For } from 'solid-js';

const App: Component = () => {
    return (
        <div class="h-screen w-screen grid p-10" style={{ "grid-template-rows": "min-content fit-content" }} >
            <div class="grid grid-cols-4">
                <div class="text-center">asdknsadklas</div>
                <div class="text-center">asdknsadklas</div>
                <div class="text-center">asdknsadklas</div>
                <div class="text-center">asdknsadklas</div>
            </div>
            <div class="grid grid-flow-row overflow-y-scroll">
                <For each={Array(100)}>
                    {() =>
                        <div class=" hover:bg-orange-50 grid grid-cols-4">
                            <div>asdsadasd</div>
                            <div>asdsadasd</div>
                            <div>asdsadasd</div>
                            <div>asdsadasd</div>
                        </div>
                    }
                </For>
            </div>
        </div>
    );
};

export default App;
