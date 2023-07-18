<script>
    import "../app.css";
</script>
<header class="flex h-16 shadow-lg relative z-10">
    <nav class="flex items-center w-full">
        <ul class="flex w-full flex-row justify-around items-center">
            <li><a href="/">Home</a></li>
            <li></li>
            <li class="flex w-max h-max hover:bg-gray-200 items-center p-2 rounded-full ease-in-out duration-150"><a href="/" class="flex items-center text-gray-800 w-max"><iconify-icon icon="mdi:shopping" width="30px"></iconify-icon></a></li>
        </ul>
    </nav>
</header>
<slot />