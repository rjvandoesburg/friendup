<template>
    <modal name="login" height="auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
            <button class="delete" aria-label="close" @click="hide"></button>
        </header>
        <section class="modal-card-body">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input
                            v-model="form.username"
                            class="input"
                            type="text"
                            placeholder="E-mail or username"
                            autocomplete="email"
                            required
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input
                            v-model="form.password"
                            class="input"
                            type="password"
                            placeholder="****"
                            autocomplete="password"
                            required
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
        </section>
        <footer class="modal-card-foot">
            <button class="button is-fullwidth" @click="hide">Cancel</button>
            <button type="submit" @click.prevent="login" :class="loginButtonClasses">Login</button>
        </footer>

    </modal>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                },
                submitting: false
            }
        },
        computed: {
            loginButtonClasses() {
                return ['button', 'is-success', 'is-pulled-right', 'is-fullwidth', this.submitting ? 'is-loading' : ''];
            }
        },
        methods: {
            login() {
                axios.post('/login', this.form)
                    .then(response => {

                    })
                    .catch(response => {

                    });
            },
            hide() {
                this.$modal.hide('login');
            }
        },
    }
</script>