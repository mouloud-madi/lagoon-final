<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
        <li class="nav-item {{request()->routeIs('home*')? 'active' :''}}">
            <a class="nav-link" href="{{route('home')}}">
                <i class="ti-home  menu-icon"></i>
                <span class="menu-title">Home</span>
            </a>
        </li>
        <li class="nav-item {{request()->routeIs('section*')? 'active' :''}}">
            <a class="nav-link" href="{{route('section.index')}}">
                <i class="ti-list-ol  menu-icon"></i>
                <span class="menu-title">Sections</span>
            </a>
        </li>
        <li class="nav-item {{request()->routeIs('service*')? 'active' :''}}">
            <a class="nav-link" href="{{route('service.index')}}">
                <i class="icon-grid menu-icon"></i>
                <span class="menu-title">Services</span>
            </a>
        </li>
        <li class="nav-item {{request()->routeIs('category*')? 'active' :''}}">
            <a class="nav-link" href="{{route('category.index')}}">
                <i class="icon-layout menu-icon"></i>
                <span class="menu-title">Gallery categories</span>
            </a>
        </li>
        <li class="nav-item {{request()->routeIs('gallery*')? 'active' :''}}">
            <a class="nav-link" href="{{route('gallery.index')}}">
                <i class="icon-image menu-icon"></i>
                <span class="menu-title">Galleries</span>
            </a>
        </li>
        <li class="nav-item {{request()->routeIs('slider*')? 'active' :''}}">
            <a class="nav-link" href="{{route('slider.index')}}">
                <i class="icon-image menu-icon"></i>
                <span class="menu-title">Sliders</span>
            </a>
        </li>
        <li class="nav-item {{request()->routeIs('lagoon-design*')? 'active' :''}}">
            <a class="nav-link" href="{{route('lagoon-design.index')}}">
                <i class="ti-info-alt menu-icon"></i>
                <span class="menu-title">Web site info</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/">
                <i class="ti-link menu-icon"></i>
                <span class="menu-title">My web site</span>
            </a>
        </li>
    </ul>
</nav>
