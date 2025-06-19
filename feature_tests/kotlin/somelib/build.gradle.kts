plugins {
    kotlin("jvm") version "1.9.0"
    application
    `maven-publish`
}



group = "dev.diplomattest"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

// declare a "configuration" named "someConfiguration"
val someConfiguration by configurations.creating

dependencies {
    implementation("net.java.dev.jna:jna:5.14.0")
    testImplementation(kotlin("test"))
    testImplementation("org.junit.jupiter:junit-jupiter:5.9.2")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
    testImplementation("net.jqwik:jqwik-kotlin:1.9.3")
    testImplementation("io.mockk:mockk:1.13.10")
}
publishing {
    publications {
        create<MavenPublication>("maven") {
            groupId = "dev.diplomattest"
            artifactId = "somelib"
            version = "1.0-SNAPSHOT"

            from(components["java"])
        }
    }
}







tasks.test {
    useJUnitPlatform()
    testLogging {
        events ("passed", "skipped", "failed", "standardOut", "standardError")
        exceptionFormat = org.gradle.api.tasks.testing.logging.TestExceptionFormat.FULL
        showCauses = true
        showExceptions = true
        showStackTraces = true
    }
}

kotlin {
    jvmToolchain(17)
}

application {
}