const container = document.getElementById("container");

if(window.GitgraphJS && window.GitgraphJS.createGitgraph) {
    const gitgraph = GitgraphJS.createGitgraph(container);

    console.log(gitgraph);

    const master = gitgraph.branch("master");
    master.commit("chore: init commit");

    const develop = gitgraph.branch("develop");

    const sprintV1 = gitgraph.branch("sprint-0.0.1");
    sprintV1.commit("feat: xxx")
        .commit()
        .commit()
        .commit();
    develop.merge(sprintV1);

    // const bugfixV1 = gitgraph.branch("bugfix-xxx");
    develop.commit().commit().commit();
    // develop.merge(bugfixV1);

    const sprintV2 = gitgraph.branch("sprint-0.0.2");
    sprintV2.commit()
        .commit()
        .commit()
        .commit();
    develop.merge(sprintV2);

    develop.commit("fix(#xxx): bugfix xxx").commit("fix(#xxx): bugfix xxx").commit("fix(#xxx): bugfix xxx");

    const sprintV3 = gitgraph.branch("sprint-0.0.3");
    sprintV3.commit()
        .commit()
        .commit()
        .commit();
    develop.merge(sprintV3);
}