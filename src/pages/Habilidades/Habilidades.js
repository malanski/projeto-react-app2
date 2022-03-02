export const Habilidades = (props) => {
    return (
        <div>
            <h1>Habilidades</h1>

            <div className="flex-row">
                <main>
                    <h2 >Meus projetos utilizam:</h2>

                    
                    <ul className="main-ul">
                        <li>
                            <span>Front-end</span>
                            <blockquote>
                                HTML<br/>
                                CSS - SASS<br/>
                                JavaScript<br/>
                                React<br/>
                                Node<br/>
                                VsCode<br/>
                                GitHub<br/>
                            </blockquote>
                        </li>
                        <li>
                            <span>Design</span>
                            <blockquote>
                                Desenho técnico e artístico<br/>
                                Pintura<br/>
                                Ilustração<br/>
                                Photoshop<br/>
                                Illustrator<br/>
                                Figma<br/>
                                UXDesign<br/>
                                Premiere
                            </blockquote>
                        </li>
                        <li>
                            <span>Audio</span>
                            <blockquote>
                                Ableton Live<br/>
                                Composição musical<br/>
                                Violão e Guitarra<br/>
                                Mixagem<br/>
                                Produção e edição
                            </blockquote>
                        </li>
                    </ul>
                </main>

                <main className="ninja">
                    <h2 >Uma dadiva dos Ninja</h2>

                    
                    <ul className="main-ul">
                        <li>
                            <span>Tai-Jutsu</span>
                            <blockquote>
                                Kungfu: Shaolin do Norte e Sul<br/>
                                Bastão<br/>
                                Luta corpo-a-corpo
                            </blockquote>
                        </li>
                        <li>
                            <span>Parkour</span>
                            <blockquote>
                                Subida de muros<br/>
                                Rolamento evasivo<br/>
                                Treinamento de Resistência<br/>
                            </blockquote>
                        </li>
                        <li>
                            <span>Arte da Furtividade</span>
                            <blockquote>
                                Taticas de Combate<br/>
                                Camuflagem das Sombras<br/>


                            </blockquote>
                        </li>
                    </ul>
                </main>
            </div>
        </div>

    )
}