@extends('layouts/app')

@section('title', 'Home')

@section('content')
    <div class="content is-marginless">
        <section class="hero is-primary is-large hero-background">
            <div class="hero-body">

                <div class="container">
                    <h1 class="title">
                        Friend Up!
                    </h1>
                    <h2 class="subtitle">
                        Meeting new people all across the world.
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <h1 class="title">Section</h1>
                <h2 class="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
            </div>
        </section>
        <section class="hero is-primary">
            <div class="hero-body">
                <section class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">People</p>
                            <p class="title">3,456</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Countries</p>
                            <p class="title">123</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Followers</p>
                            <p class="title">456K</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Likes</p>
                            <p class="title">789</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <google-maps></google-maps>
    </div>
@endsection