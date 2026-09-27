{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    buildInputs = [
        pkgs.nodejs
        pkgs.pnpm
        pkgs.git
        pkgs.gh
    ];
}
